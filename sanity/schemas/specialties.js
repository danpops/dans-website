const specialties = {
  name: 'specialties',
  title: 'Specialties',
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
      name: 'specialtyLinks',
      title: 'Specialty Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' }
          ]
        }
      ]
    }
  ]
}

export default specialties
