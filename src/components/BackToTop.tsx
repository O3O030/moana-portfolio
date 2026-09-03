import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY >= 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <a className={`back-to-top${visible ? " is-visible" : ""}`} href="#top" aria-label="回到頁面頂端" aria-hidden={!visible} tabIndex={visible ? 0 : -1}><span className="back-to-top-arrow" aria-hidden="true">↑</span><span className="back-to-top-label" aria-hidden="true">TOP</span></a>;
}
