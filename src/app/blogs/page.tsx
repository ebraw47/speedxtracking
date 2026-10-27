import type { Metadata } from "next";
import Link from "next/link";
import { getBlogsSorted } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "SpeedX Tracking blogs — delivery hours, tracking tips, Out for Delivery status, and package delivery guides.",
};

export default function BlogsPage() {
  const posts = getBlogsSorted();

  return (
    <main className="page-main">
      <div className="container">
        <div className="section-head blog-index-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            SpeedX Tracking
          </p>
          <h1>Blogs</h1>
          <p>
            Guides and answers about SpeedX delivery hours, tracking status, and
            how to follow your package.
          </p>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <p className="blog-meta">
                <time dateTime={post.date}>{post.dateLabel}</time>
                {" · "}
                {post.author}
              </p>
              <h2>
                <Link href={`/blogs/${post.slug}`}>{post.h1}</Link>
              </h2>
              <p>{post.lead}</p>
              <p className="card-link">
                <Link href={`/blogs/${post.slug}`}>Read article →</Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
