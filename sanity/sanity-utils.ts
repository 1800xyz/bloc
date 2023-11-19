import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config'

export async function getPosts() {
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
