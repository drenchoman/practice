import Link from 'next/link';
export default function BlogPage() {
  return (
    <main>
      <h1>The blog</h1>
      <Link href="/blog/blog-1">Blog 1</Link>
      <Link href="/blog/blog-2">Blog 2</Link>
    </main>
  );
}
