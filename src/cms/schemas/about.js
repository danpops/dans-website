const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'string' },
    {
      name: 'aboutGif',
      title: 'About GIF',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    }
  ]
}

export default about
