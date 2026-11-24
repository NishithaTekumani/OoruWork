import Link from "next/link";

const questions = [
  { q: "How does OoruWork match jobs?", a: "It compares the skills, locality, availability and daily pay in a worker profile with each listing. The score shows the contribution of each factor." },
  { q: "Do I need a resume?", a: "No. A worker profile asks for a name, locality, practical skills, availability and expected daily pay." },
  { q: "Are the sample listings real jobs?", a: "No. Listings labelled Sample listing are demonstration content. They are not real or verified offers." },
  { q: "Where is my information saved?", a: "This prototype saves profiles, listings and applications in local browser storage on the current device. It does not sync information to other devices." },
  { q: "What happens when I apply?", a: "Your name, locality, practical skills, availability and wage preference are added to the applicant list in this browser." },
  { q: "How can an employer add a job?", a: "Choose Hire workers, select Post a job, enter the role details and publish. The listing is saved in the current browser." },
];

export default function FAQPage() {
  return <main><header className="topbar"><Link className="brand" href="/">ooru<span>work</span></Link><Link className="text-action" href="/">Back to jobs <span className="animated-arrow">→</span></Link></header><section className="faq-page"><p className="eyebrow">OoruWork help</p><h1>Frequently asked questions</h1><p className="faq-lead">How worker profiles, local listings and match scores work in this prototype.</p><div className="faq-list">{questions.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div><Link className="text-action" href="/">Return to OoruWork <span className="animated-arrow">→</span></Link></section><footer><Link className="brand footer-brand" href="/">ooru<span>work</span></Link><p>A worker shouldn’t need a resume to find work.</p><span>Track 4 · UnlockED</span></footer></main>;
}
