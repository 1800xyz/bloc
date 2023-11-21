import { getPosts } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';


export default async function Main() {
  
  const posts = await getPosts();
  const main = posts[0];

  return (
    <div className="ml-4 mt-24">
      <h2 className="text-inky text-3xl">
        {main.title}</h2>
      
      <div className="text-lg text-inky mt-24">
        <PortableText value={main.body} />
      </div>
    </div>
  )

}