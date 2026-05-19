import { HeroSection } from '@/components/sections/hero';

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10">
      <HeroSection />
      <section className="grid gap-6 md:grid-cols-3">
        {['Projects', 'Research', 'Analytics'].map((item) => (
          <article key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-medium">{item}</h2>
            <p className="mt-2 text-sm text-slate-300">Premium module scaffold ready for dynamic data, metrics, and motion interactions.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
