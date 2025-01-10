import { defineCollection } from "astro:content";
import { BASE_TITLE } from "astro:env/server";
const posts = defineCollection({
  loader: async () => {
    return [
      {
        id: 'gataca',
        title: BASE_TITLE + ' Gataca',
        //title: 'Gataca'
      },
      {
        id: 'paradise',
        title: BASE_TITLE + ' Paradise',
        //title: 'Paradise'
      }
    ]
  }
})

export const collections = {
  posts
}