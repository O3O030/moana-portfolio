import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { profileContent } from "../content/profile";
import { projects } from "../content/projects";
import { skills } from "../content/skills";
import { siteContent } from "../content/site";
import type { Skill, SkillCategory } from "../types/content";
import { VideoShowcase } from "../components/VideoShowcase";
import { ContactTrigger } from "../components/ContactModal";

export function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const skillGroups = skills.reduce<Partial<Record<SkillCategory, Skill[]>>>((groups, skill) => {
    (groups[skill.category] ??= []).push(skill);
    return groups;
  }, {});
  return <>
    <Header />
    <main>
      <section className="hero container">
        <p className="eyebrow">{profileContent.heroEyebrow}</p>
        <h1>{profileContent.heroHeadline}</h1>
        <div className="hero-bottom"><p>{profileContent.heroDescription}</p><a className="button" href={siteContent.primaryCta.href.replace("/", "")}>{siteContent.primaryCta.label}<span aria-hidden="true">↓</span></a></div>
        <div className="hero-mark" aria-hidden="true"><span>M</span><i /></div>
      </section>
      <section id="work" className="section container"><div className="editorial-heading"><p className="bilingual-label"><span>{siteContent.sectionLabels.work.en}</span>{siteContent.sectionLabels.work.zh}</p><h2>{siteContent.sectionLabels.work.title}</h2></div>{featuredProjects.length ? featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />) : <p className="empty-state">Projects are being prepared.</p>}</section>
      <section className="section capabilities"><div className="container"><div className="editorial-heading"><p className="bilingual-label"><span>{siteContent.sectionLabels.capabilities.en}</span>{siteContent.sectionLabels.capabilities.zh}</p><h2>{siteContent.sectionLabels.capabilities.title}</h2></div><div className="capability-grid">{profileContent.capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
      <VideoShowcase />
      <section id="about" className="section about container"><p className="bilingual-label"><span>{siteContent.sectionLabels.about.en}</span>{siteContent.sectionLabels.about.zh}</p><div><h2>{profileContent.shortBio}</h2><p>{profileContent.about}</p><p className="focus"><span>Current focus · 目前關注</span>{profileContent.currentFocus}</p></div></section>
      <section id="skills" className="section skills container"><div className="editorial-heading"><p className="bilingual-label"><span>{siteContent.sectionLabels.skills.en}</span>{siteContent.sectionLabels.skills.zh}</p><h2>{siteContent.sectionLabels.skills.title}</h2></div><div className="skill-groups">{Object.entries(skillGroups).map(([category, items]) => <article key={category}><h3>{category}</h3><ul>{items?.map((skill) => <li key={skill.name}>{skill.name}{skill.level && <small>{skill.level}</small>}</li>)}</ul></article>)}</div></section>
      <section id="contact" className="contact"><div className="container contact-inner"><p className="bilingual-label"><span>{siteContent.contactCta.eyebrow}</span>{siteContent.contactCta.eyebrowZh}</p><h2>{siteContent.contactCta.title}</h2><p>{siteContent.contactCta.description}</p><ContactTrigger className="button button-dark">{siteContent.contactCta.link.label}<span aria-hidden="true">↗</span></ContactTrigger></div></section>
    </main><Footer />
  </>;
}
