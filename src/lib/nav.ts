export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#top", label: "Track My Package" },
  { href: "/#about", label: "About Us" },
  { href: "/#overview", label: "Overview" },
  { href: "/#services", label: "Delivery Services" },
  { href: "/#delivery-flow", label: "How We Deliver" },
  { href: "/#ship", label: "Ship With Us" },
  { href: "/#guide", label: "How to Track" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#drive", label: "Drive With Us" },
  { href: "/#contact", label: "Support" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#discovery", label: "Book Discovery" },
];

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};

export const FOOTER_LINKS: {
  ship: FooterLinkGroup;
  company: FooterLinkGroup;
  legal: FooterLinkGroup;
} = {
  ship: {
    title: "Ship with us",
    links: [
      { href: "/posts/for-retailers", label: "For Retailers" },
      {
        href: "/posts/for-logistics-providers",
        label: "For Logistics Providers",
      },
      { href: "/posts/cross-border-shipping", label: "Cross-Border Shippers" },
      { href: "/#drive", label: "Drive With Us" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { href: "/#about", label: "About Us" },
      { href: "/#drive", label: "Drive With Us" },
      { href: "/#coverage", label: "U.S. Coverage" },
      { href: "/#discovery", label: "Book Discovery Call" },
      { href: "/#contact", label: "Contact Support" },
      { href: "/#top", label: "Track My Package" },
    ],
  },
  legal: {
    title: "Legal & site",
    links: [
      { href: "/#overview", label: "Official site (overview)" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#guide", label: "How to Track" },
      { href: "/#ship", label: "Ship With Us" },
    ],
  },
};
