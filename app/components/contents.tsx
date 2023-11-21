import { getPosts } from "@/sanity/sanity-utils";
import Link from 'next/link'

export default async function Contents() {
  
  const posts = await getPosts();

  return (
    <div className="bg-transparent border fixed inset-y-0 right-0 w-3/12 bg-white p-3">
      <div className="absolute bottom-0 p-6 ">
        {posts.map((p) => (
        <Link href={`/p/${p.slug}`} key={p._id} className="hover:scale-105 hover:border-blue-500 transition">
          <div className=
              "text-sm mt-2 pt-6">
              {p.title}
          </div>
        </Link>
        ))}
        </div>
    </div>
  )

}