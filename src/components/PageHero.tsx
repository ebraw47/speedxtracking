type PageHeroProps = {
  title: string;
  lead?: string;
  eyebrow?: string;
};

export default function PageHero({ title, lead, eyebrow }: PageHeroProps) {
  return (
    <div className="page-hero container">
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h1>{title}</h1>
      {lead && <p>{lead}</p>}
    </div>
  );
}
