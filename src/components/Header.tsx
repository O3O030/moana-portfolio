import { Link, NavLink, useLocation } from "react-router-dom";
import { siteContent } from "../content/site";

export function Header() {
  const { pathname } = useLocation();
  const homeHref = (href: string) => pathname === "/" ? href.replace("/", "") : href;
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link className="wordmark" to="/" aria-label="Moana home"><img src="/images/branding/moana-logo.png" alt={siteContent.name} /></Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {siteContent.nav.map((item) => <li key={item.href}>{item.href === "/resume"
              ? <NavLink to={item.href} className={({ isActive }) => isActive ? "is-active" : undefined}>{item.label}</NavLink>
              : <a href={homeHref(item.href)}>{item.label}</a>}</li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
