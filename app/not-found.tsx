import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Moksha Voyage</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-ink/65">The page you are looking for is not available.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
          Return home
        </Link>
      </div>
    </main>
  );
}
