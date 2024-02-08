const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'title', title: 'Experience Title', type: 'string' },
    { name: 'summary', title: 'Experience Summary', type: 'string' },
    {
      name: 'cards',
      title: 'Experience Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'company', title: 'Company', type: 'string' },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              description: 'Upload a company picture',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
            },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'date', title: 'Date', type: 'string' },
            {
              name: 'technologies',
              title: 'Technologies',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'notes',
              title: 'Notes',
              type: 'array',
              of: [{ type: 'string' }]
            }
          ]
        }
      ]
    },
    { name: 'specialtyTitle', title: 'Specialty Title', type: 'string' },
    { name: 'specialtySummary', title: 'Specialty Summary', type: 'string' },
    {
      name: 'specialtyLinks',
      title: 'Specialty Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              description: 'Upload specialty/technology logo',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
            }
          ]
        }
      ]
    }
  ]
}

export default experience
