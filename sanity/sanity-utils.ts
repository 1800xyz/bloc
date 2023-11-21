import { Post } from "@/app/types/Posts";
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config'
import postcss from "postcss";

export async function getPosts(): Promise<Post[]>{
  
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _publishedAt,
      title,
      "slug": slug.current,
      body,
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {

    return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _publishedAt,
      title,
      "slug": slug.current,
      body,
    }`, { slug }
  )

}