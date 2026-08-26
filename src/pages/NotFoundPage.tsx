import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function NotFoundContent() { return <main className="not-found container"><p className="eyebrow">404 / NOT FOUND</p><h1>這個頁面還不在雷達上。</h1><p>網址可能已變更，或這個作品尚未公開。</p><Link className="button" to="/">Back home <span aria-hidden="true">↗</span></Link></main> }
export function NotFoundPage() { return <><Header /><NotFoundContent /><Footer /></> }
