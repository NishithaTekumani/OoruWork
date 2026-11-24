import Link from "next/link";

export default function NotFound() {
  return <main><header className="topbar"><Link className="brand" href="/">ooru<span>work</span></Link></header><section className="page-not-found"><p className="code">404 · PAGE NOT FOUND</p><h1>This page isn’t here.</h1><p>The address may have changed, or the page may no longer be available. Return to the local job listings.</p><Link className="button button-primary" href="/">Back to OoruWork <span className="animated-arrow">→</span></Link></section></main>;
}
