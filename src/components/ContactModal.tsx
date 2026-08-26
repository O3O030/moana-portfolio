import { createContext, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { siteContent } from "../content/site";

type ContactContextValue = { openContact: () => void };
const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "loading" | "success" | "config" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const copy = siteContent.contactModal;

  const close = () => { setOpen(false); setState("idle"); };
  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('button,input,textarea,[href]:not([tabindex="-1"])')].filter((element) => !element.hasAttribute("disabled"));
        const first = focusable[0]; const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.classList.remove("modal-open"); previousFocus.current?.focus(); };
  }, [open]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();
    if (!endpoint) { setState("config"); return; }
    setState("loading");
    try {
      const formData = new FormData(form);
      const payload = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        subject: String(formData.get("subject") ?? ""),
        message: String(formData.get("message") ?? ""),
      };
      const response = await fetch(endpoint, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Contact endpoint rejected the request");
      form.reset(); setState("success");
    } catch { setState("error"); }
  };

  return <ContactContext.Provider value={{ openContact: () => setOpen(true) }}>
    {children}
    {open && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" ref={dialogRef}>
        <button className="modal-close" type="button" onClick={close} ref={closeRef} aria-label={copy.close}>×</button>
        <p className="bilingual-label"><span>{copy.eyebrow}</span></p><h2 id="contact-title">{copy.title}</h2><p className="modal-intro">{copy.description}</p>
        {state === "success" ? <div className="form-state" role="status"><h3>{copy.successTitle}</h3><p>{copy.successBody}</p></div> : <form onSubmit={submit} noValidate={false}>
          <label><span>{copy.fields.nameEn}<small>{copy.fields.name}</small></span><input name="name" autoComplete="name" required /></label>
          <label><span>{copy.fields.emailEn}<small>{copy.fields.email}</small></span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>{copy.fields.subjectEn}<small>{copy.fields.subject}</small></span><input name="subject" required /></label>
          <label><span>{copy.fields.messageEn}<small>{copy.fields.message}</small></span><textarea name="message" rows={5} required /></label>
          <button className="button button-dark" type="submit" disabled={state === "loading"}>{state === "loading" ? copy.sending : copy.submit}<span aria-hidden="true">↗</span></button>
          {state === "config" && <div className="form-notice" role="status"><strong>{copy.configTitle}</strong><p>{copy.configBody}</p><code>{siteContent.email}</code></div>}
          {state === "error" && <div className="form-notice form-error" role="alert"><strong>{copy.errorTitle}</strong><p>{copy.errorBody}</p><code>{siteContent.email}</code></div>}
        </form>}
      </div>
    </div>}
  </ContactContext.Provider>;
}

export function ContactTrigger({ className = "", children }: { className?: string; children: ReactNode }) {
  const context = useContext(ContactContext);
  if (!context) throw new Error("ContactTrigger must be used within ContactProvider");
  return <button type="button" className={className} onClick={context.openContact}>{children}</button>;
}
