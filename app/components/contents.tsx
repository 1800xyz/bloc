import { getPosts } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Link from 'next/link'


export default async function Contents() {
  
  const posts = await getPosts();

  return (
 <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
        <Link href={`/projects/${p.slug}`} key={p._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {p.title}
          </div>
        </Link>
      ))}
      </div>
  )

}