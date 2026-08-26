import { siteContent } from "../content/site";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><p>{siteContent.footerText}</p><p>{siteContent.copyright}</p></div></footer>;
}
