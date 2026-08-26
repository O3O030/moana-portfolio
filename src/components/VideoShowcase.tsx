import { videoProjects, videoSectionContent } from "../content/videos";

export function VideoShowcase() {
  return <section id="films" className="section films container">
    <div className="editorial-heading"><p className="bilingual-label"><span>{videoSectionContent.eyebrow}</span>{videoSectionContent.eyebrowZh}</p><div><h2>{videoSectionContent.title}</h2><p>{videoSectionContent.description}</p></div></div>
    <div className="film-grid">{videoProjects.map((video, index) => <article className="film-card" key={video.id}>
      {video.videoUrl ? <video controls preload="metadata" poster={video.poster} aria-label={video.titleZh ?? video.title}><source src={video.videoUrl} /></video> : <div className="film-placeholder" aria-label={videoSectionContent.comingSoon}><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true">▷</i><p>{videoSectionContent.comingSoon}</p></div>}
      {(video.title || video.titleZh) && <div className="film-copy"><p>{video.category}</p><h3>{video.titleZh ?? video.title}</h3>{video.title && video.titleZh && <small>{video.title}</small>}</div>}
    </article>)}</div>
  </section>;
}
