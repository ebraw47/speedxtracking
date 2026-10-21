"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <Image
            className="brand-logo"
            src="/images/speedx-logo.webp"
            alt="SpeedX"
            width={160}
            height={40}
            priority
          />
        </Link>
        <div className="nav-actions">
          <a
            className="nav-cta nav-cta-email"
            href="mailto:help@speedx.io"
            title="Contact support"
            aria-label="Contact support"
          >
            <svg
              className="nav-cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M5.2 7.2 12 12.2l6.8-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="nav-cta-label">Email</span>
          </a>
          <a className="nav-cta nav-cta-call" href="tel:+19496676769">
            <svg
              className="nav-cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                fill="currentColor"
              />
            </svg>
            Call Now
          </a>
          <div className="nav-menu" ref={menuRootRef}>
            <button
              type="button"
              className="nav-menu-btn"
              id="nav-menu-btn"
              aria-expanded={open}
              aria-controls="nav-menu-panel"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
            >
              <span className="nav-menu-lines" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div
              className="nav-menu-panel"
              id="nav-menu-panel"
              role="menu"
              hidden={!open}
            >
              <ul className="nav-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
