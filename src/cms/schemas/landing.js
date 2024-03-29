const landing = {
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'welcomeGif',
      title: 'Welcome GIF',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    },
    {
      name: 'iconGif',
      title: 'Icon GIF',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    },
    {
      name: 'typewriterText',
      title: 'Typewriter Text',
      type: 'array',
      of: [{ type: 'string' }]
    },
    { name: 'resume', title: 'Resume', type: 'file' },
    {
      name: 'aboutLinkGif',
      title: 'About Link GIF',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    },
    {
      name: 'contactLinkGif',
      title: 'Contact Link GIF',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    }
  ]
}

export default landing
