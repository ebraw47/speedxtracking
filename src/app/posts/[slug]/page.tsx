import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPost,
  getPostSlugs,
  type PostSection,
} from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title.replace(/\s*\|\s*SpeedX.*$/i, ""),
    description: post.description,
  };
}

function renderSection(section: PostSection, index: number) {
  switch (section.type) {
    case "heading":
      return <h2 key={index}>{section.text}</h2>;
    case "paragraph":
      return <p key={index}>{section.text}</p>;
    case "list":
      return (
        <ul className="inline-list" key={index}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "features":
      return (
        <div className="feature-grid feature-grid-2" key={index}>
          {section.cards.map((card) => (
            <article className="feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      );
    case "steps":
      return (
        <div className="steps" key={index}>
          {section.steps.map((step) => (
            <article className="step" key={step.title}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      );
    case "links":
      return (
        <p className="card-link" key={index}>
          {section.items.map((link, i) => (
            <span key={link.href}>
              {i > 0 && " · "}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </p>
      );
    default:
      return null;
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="post-page">
      <article className="container post-article">
        <p className="post-crumb">
          <Link href="/">Home</Link> · <Link href="/ship">Ship With Us</Link> ·{" "}
          {post.crumbLabel}
        </p>
        <header className="post-header">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {post.eyebrow}
          </p>
          <h1>{post.h1}</h1>
          <p className="post-lead">{post.lead}</p>
        </header>

        <div className="prose-block post-body">
          {post.sections.map(renderSection)}
        </div>

        <footer className="post-cta">
          <h2>{post.cta.title}</h2>
          <p>{post.cta.body}</p>
          <p className="card-link">
            {post.cta.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <> &nbsp;·&nbsp; </>}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </p>
        </footer>
      </article>
    </main>
  );
}
