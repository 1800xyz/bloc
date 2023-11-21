import { getPost } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';


type Props = {
  params: { post: string }
};

export default async function Page({params}: Props) {

  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div className="ml-24 w-7/12">
      <div className="mt-24">
        <h2 className="text-inky text-3xl">
          {post.title}</h2>
      <div className="text-lg text-inky mt-24">
        <PortableText value={post.body} />
      </div>
    </div>
  </div>
  ) 
}