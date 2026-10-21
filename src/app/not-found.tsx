import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-main">
      <div className="container page-hero">
        <h1>Page not found</h1>
        <p>The page you requested does not exist or has moved.</p>
        <p className="card-link">
          <Link href="/">Back to SpeedX Tracking →</Link>
        </p>
      </div>
    </main>
  );
}
