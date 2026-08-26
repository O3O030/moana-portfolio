import type { CaseStudySection as Section } from "../types/content";
import { EditorialScreenshot } from "./EditorialScreenshot";

export function CaseStudySection({ section, index }: { section: Section; index: number }) {
  const paragraphs = Array.isArray(section.body) ? section.body : section.body ? [section.body] : [];
  return (
    <section id={section.id} className={`case-section case-${section.type} variant-${section.variant ?? "default"}`}>
      <div className="case-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="case-content">
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        {section.title && <h2>{section.title}</h2>}
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.stats?.length ? <dl className="stats">{section.stats.map((stat, statIndex) => <div key={stat.label}>{section.variant === "insight" && statIndex === 1 && <span className="not-equal" aria-hidden="true">≠</span>}<dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}</dl> : null}
        {section.items?.length ? <div className="section-items">{section.items.map((item) => <article key={`${item.label}-${item.title}`}>{item.label && <span className="item-label">{item.label}</span>}<h3>{item.title}</h3>{item.description && <p>{item.description}</p>}{item.details?.length ? <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}</article>)}</div> : null}
        {section.image && (section.image.src ? <EditorialScreenshot image={section.image} /> : <figure className="image-placeholder" role="img" aria-label={`${section.image.alt} — image coming soon`}><div className="placeholder-radar"><i /></div><figcaption>{section.image.caption}<small>Image placeholder · {section.image.plannedSrc}</small></figcaption></figure>)}
        {section.highlight && <blockquote>{section.highlight}</blockquote>}
        {section.footer && <p className="section-footer">{section.footer}</p>}
      </div>
    </section>
  );
}
