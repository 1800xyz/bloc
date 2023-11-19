import { getPosts } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';


export default async function Main() {
  
  const posts = await getPosts();
  const latestPost = posts[0];

  return (
    <div className="">
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        {latestPost.title}</h2>
      
    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={latestPost.body} />
    </div>

    </div>
  )

}