import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'my_portfolio24_next_emotion',

  projectId: 'rd7ljoko',
  dataset: 'production',
  basePath:"/studio",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
