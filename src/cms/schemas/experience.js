const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string'
    },
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
              fields: [
                {
                  name: 'alt',
                  title: 'Alt',
                  type: 'string'
                }
              ]
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
    }
  ]
}

export default experience
