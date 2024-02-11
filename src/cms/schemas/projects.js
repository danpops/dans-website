const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'string' },
    {
      name: 'projectCards',
      title: 'Project Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'info', title: 'Info', type: 'string' },
            { name: 'path', title: 'Path', type: 'string' },
            { name: 'github', title: 'Github', type: 'string' }
          ]
        }
      ]
    }
  ]
}

export default projects
