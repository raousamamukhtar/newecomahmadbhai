import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token:process.env.SANITY_ACCESS_TOKEN,
  apiVersion: '2023-07-04', 
  useCdn: false, 
})

