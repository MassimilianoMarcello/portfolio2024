import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'postContent',
  title: 'Post Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    }),
  ],
});
