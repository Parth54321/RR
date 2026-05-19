export default function BlogDetail({ params }: { params: { slug: string } }) {
  return <main className="mx-auto max-w-6xl px-6 py-10"><h1 className="text-4xl font-semibold">Article: {params.slug}</h1></main>;
}
