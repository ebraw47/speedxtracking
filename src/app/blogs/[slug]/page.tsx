import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBlog,
  getBlogSlugs,
  type BlogSection,
} from "@/lib/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) {
    return { title: "Blog not found" };
  }
  return {
    title: blog.title,
    description: blog.description,
  };
}

function renderSection(section: BlogSection, index: number) {
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
    case "table":
      return (
        <div className="table-wrap" key={index}>
          <table>
            <thead>
              <tr>
                {section.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  return (
    <main className="post-page">
      <article className="container post-article">
        <p className="post-crumb">
          <Link href="/">Home</Link> · <Link href="/blogs">Blogs</Link> ·{" "}
          {blog.crumbLabel}
        </p>
        <header className="post-header">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Blog
          </p>
          <h1>{blog.h1}</h1>
          <p className="blog-meta">
            <time dateTime={blog.date}>{blog.dateLabel}</time>
            {" by "}
            {blog.author}
          </p>
          <p className="post-lead">{blog.lead}</p>
        </header>

        <div className="prose-block post-body">
          {blog.sections.map(renderSection)}
        </div>

        <footer className="post-cta">
          <h2>Track your SpeedX package</h2>
          <p>
            Enter your SPX tracking number for the latest Out for Delivery and
            Delivered updates.
          </p>
          <p className="card-link">
            <Link href="/">Track a package →</Link>
            {" · "}
            <Link href="/blogs">Back to blogs →</Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
