import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CaseStudySection } from "../components/CaseStudySection";
import { getProjectBySlug } from "../content/projects";
import { NotFoundContent } from "./NotFoundPage";
import { ContactTrigger } from "../components/ContactModal";
import { EditorialScreenshot } from "../components/EditorialScreenshot";
import type { LinkItem } from "../types/content";

function ExternalLinks({ links }: { links: LinkItem[] }) {
  if (!links.length) return null;
  return <div className="external-links" aria-label="Project links">{links.map((link) => <a className="button button-dark" href={link.href} target="_blank" rel="noopener noreferrer" key={`${link.label}-${link.href}`}>{link.label}<span aria-hidden="true">↗</span></a>)}</div>;
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) return <><Header /><NotFoundContent /><Footer /></>;
  return <><Header /><main className="case-study"><header className="case-hero container"><Link className="back-link" to="/#work">← All work</Link><div className="case-title"><p className="bilingual-label"><span>{project.hero.eyebrow}</span>案例研究</p><p className="case-kicker">{project.title} · {project.status}</p><h1>{project.hero.title}</h1></div><p className="case-summary">{project.hero.description}</p><ExternalLinks links={project.externalLinks} /><dl className="hero-metrics">{project.hero.metrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl>{project.heroImage?.src && <EditorialScreenshot image={project.heroImage} variant="hero" />}</header><div className="container case-sections">{project.caseStudySections.map((section, index) => <CaseStudySection key={section.id} section={section} index={index} />)}</div><section className="case-closing"><div className="container"><p className="eyebrow">{project.closing.eyebrow}</p><h2>{project.closing.title}</h2><p>{project.closing.body}</p><div className="closing-actions"><Link className="button button-dark" to={project.closing.primaryCta.href}>{project.closing.primaryCta.label}<span aria-hidden="true">←</span></Link><ContactTrigger className="text-link contact-text-button">{project.closing.contactCta.label} ↗</ContactTrigger></div></div></section></main><Footer /></>;
}
