import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/cms/schemas'

export default defineConfig({
  name: 'dans-website-sanity',
  title: 'dans-website-sanity',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemaTypes }
})
