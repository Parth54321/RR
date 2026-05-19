export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return <main className="mx-auto max-w-6xl px-6 py-10"><h1 className="text-4xl font-semibold">Project: {params.slug}</h1></main>;
}
