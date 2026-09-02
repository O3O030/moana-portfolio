import { useEffect, useRef, useState } from "react";
import { selectedWorks, videoSectionContent } from "../content/videos";

export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(section.querySelectorAll<HTMLElement>(".selected-work"));
    section.classList.add("selected-works--reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const playFilm = (id: string) => {
    if (activeVideo === id) {
      void videoRef.current?.play();
      return;
    }
    setActiveVideo(id);
  };

  return <section id="films" ref={sectionRef} className="section selected-works container">
    <div className="editorial-heading selected-works-heading"><p className="eyebrow">{videoSectionContent.eyebrow}</p><div><h2>{videoSectionContent.title}</h2><p>{videoSectionContent.description}</p></div></div>
    <div className="selected-work-grid">{selectedWorks.map((work) => <article className="selected-work" key={work.id}>
      <div className="selected-work-media">
        {work.kind === "preview" && work.videoUrl
          ? <video controls playsInline preload="metadata" aria-label={work.alt}><source src={work.videoUrl} type="video/mp4" /></video>
          : work.kind === "video" && activeVideo === work.id && work.videoUrl
          ? <video ref={videoRef} controls autoPlay preload="metadata" poster={work.image} aria-label={`${work.title} 播放器`}><source src={work.videoUrl} type="video/mp4" /></video>
          : work.kind === "video"
            ? <button type="button" className="selected-work-media-link" onClick={() => playFilm(work.id)} aria-label={`播放 ${work.title}`}><img src={work.image} alt={work.alt} /><span aria-hidden="true">PLAY →</span></button>
            : <a className="selected-work-media-link" href={work.href} target="_blank" rel="noopener noreferrer" aria-label={`${work.title}（在新分頁開啟）`}><img src={work.image} alt={work.alt} /><span aria-hidden="true">OPEN ↗</span></a>}
      </div>
      <div className="selected-work-copy"><p className="selected-work-meta"><span>{work.category}</span><span>{work.number}</span></p><h3>{work.title}</h3><p className="selected-work-description">{work.description}</p>
        {work.kind === "video"
          ? <button type="button" className="selected-work-cta" onClick={() => playFilm(work.id)}>{work.cta} <span aria-hidden="true">→</span></button>
          : <a className="selected-work-cta" href={work.href} target="_blank" rel="noopener noreferrer">{work.cta} <span aria-hidden="true">↗</span></a>}
      </div>
    </article>)}</div>
  </section>;
}
