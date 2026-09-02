import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { profileContent } from "../content/profile";
import { projects } from "../content/projects";
import { skillGroupDescriptions, skills } from "../content/skills";
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
      <section className="hero hero-ocean container">
        <div className="hero-media">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-label="Moana 個人品牌形象影片"><source src="/videos/moana.mp4" type="video/mp4" /></video>
        </div>
        <div className="hero-content">
          <img className="hero-logo" src="/images/branding/moana-logo.png" alt="Moana" />
          <p className="eyebrow">{profileContent.heroEyebrow}</p>
          <h1>{profileContent.heroHeadline.map((line, index) => <span key={line}>{line}{index < profileContent.heroHeadline.length - 1 && <br />}</span>)}</h1>
          <p className="hero-english">{profileContent.heroHeadlineEn.map((line, index) => <span key={line}>{line}{index < profileContent.heroHeadlineEn.length - 1 && <br />}</span>)}</p>
          <div className="hero-bottom"><p>{profileContent.heroDescription}</p><a className="button" href={siteContent.primaryCta.href.replace("/", "")}>{siteContent.primaryCta.label}<span aria-hidden="true">↓</span></a></div>
          <img className="hero-character" src="/images/branding/mona-character.png" alt="揮手迎接訪客的 Mona 品牌角色" />
        </div>
      </section>
      <section id="work" className="section container"><svg className="ocean-sticker sticker-shell" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><path d="M14 57c0-24 11-40 26-40s26 16 26 40H14Z"/><path d="M40 18v39M28 21l6 36M52 21l-6 36M20 31l9 26M60 31l-9 26"/><path d="M10 58h60"/></svg><div className="editorial-heading"><p className="bilingual-label"><span>{siteContent.sectionLabels.work.en}</span>{siteContent.sectionLabels.work.zh}</p><h2>{siteContent.sectionLabels.work.title}</h2></div>{featuredProjects.length ? featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />) : <p className="empty-state">Projects are being prepared.</p>}</section>
      <section className="section capabilities"><div className="container"><div className="editorial-heading"><p className="bilingual-label"><span>{siteContent.sectionLabels.capabilities.en}</span>{siteContent.sectionLabels.capabilities.zh}</p><h2>{siteContent.sectionLabels.capabilities.title}</h2></div><div className="capability-grid">{profileContent.capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
      <VideoShowcase />
      <section id="about" className="section about container"><svg className="ocean-sticker sticker-fish" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><path d="M18 40c10-15 29-19 43-7l11-9-2 16 2 16-11-9c-14 12-33 8-43-7Z"/><circle cx="51" cy="36" r="2.5"/><path d="M25 40h10"/></svg><p className="bilingual-label"><span>{siteContent.sectionLabels.about.en}</span>{siteContent.sectionLabels.about.zh}</p><div><h2>{profileContent.shortBio}</h2><p>{profileContent.about}</p><p className="focus"><span>Current focus · 目前關注</span>{profileContent.currentFocus}</p></div></section>
      <section id="skills" className="section skills container"><div className="editorial-heading"><p className="bilingual-label"><span>{siteContent.sectionLabels.skills.en}</span>{siteContent.sectionLabels.skills.zh}</p><div><h2>{siteContent.sectionLabels.skills.title}</h2><p>{siteContent.sectionLabels.skills.description}</p></div></div><div className="skill-groups">{Object.entries(skillGroups).map(([category, items]) => <article key={category}><h3>{category}</h3><p>{skillGroupDescriptions[category as SkillCategory]}</p><ul>{items?.map((skill) => <li key={skill.name}>{skill.name}{skill.level && <small>{skill.level}</small>}</li>)}</ul></article>)}</div></section>
      <section id="contact" className="contact"><div className="container contact-inner"><p className="bilingual-label"><span>{siteContent.contactCta.eyebrow}</span>{siteContent.contactCta.eyebrowZh}</p><h2>{siteContent.contactCta.title}</h2><p>{siteContent.contactCta.description}</p><ContactTrigger className="button button-dark">{siteContent.contactCta.link.label}<span aria-hidden="true">↗</span></ContactTrigger></div></section>
    </main><Footer />
  </>;
}
