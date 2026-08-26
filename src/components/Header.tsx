import { Link, useLocation } from "react-router-dom";
import { siteContent } from "../content/site";

export function Header() {
  const { pathname } = useLocation();
  const homeHref = (href: string) => pathname === "/" ? href.replace("/", "") : href;
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" to="/" aria-label="Moana home">{siteContent.name}<span>.</span></Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {siteContent.nav.map((item) => <li key={item.href}><a href={homeHref(item.href)}>{item.label}</a></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
