import type { ProjectImage } from "../types/content";

export function EditorialScreenshot({ image, variant = "full" }: { image: ProjectImage; variant?: "full" | "featured" | "hero" }) {
  if (!image.src) return null;
  return <figure className={`editorial-screenshot screenshot-${variant}`}>
    {image.stageLabels?.length ? <ol className="screenshot-stages">{image.stageLabels.map((label) => <li key={label}>{label}</li>)}</ol> : null}
    <div className="screenshot-frame"><img src={image.src} alt={image.alt} /></div>
    {(image.caption || image.note) && <figcaption>{image.caption && <span>{image.caption}</span>}{image.note && <small>{image.note}</small>}</figcaption>}
  </figure>;
}
