import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/nav";

export default function Footer() {
  const groups = [FOOTER_LINKS.ship, FOOTER_LINKS.company, FOOTER_LINKS.legal];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {groups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={`${group.title}-${link.href}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container disclaimer">© 2026 SpeedX Tracking</div>
    </footer>
  );
}
