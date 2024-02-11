import { getWindowLayout } from '@/components/Layout'
import { WindowsContainers } from '@/components/Layout/styles'
import ProjectCard from '@/components/ProjectCard'
import { ProjectContainer } from '@/components/ProjectCard/styles'
import { BodyText } from '@/components/Text'
import { useRouter } from 'next/router'

export function getStaticProps () {
  const id = 'projects'
  const title = 'Projects'
  const data = [
    {
      title: 'My Record Collection',
      info: 'Application built with React and Styled Components, leveraging the Discogs API to present my personal record collection, allowing users to delve into album details with ease.',
      path: '/records',
      github:
        'https://github.com/danpops/dans-website/blob/dev/src/pages/records/index.js'
    },
    {
      title: 'Modular Synth',
      info: 'A dynamic audio-visual playground powered by Tone.js, where users can sculpt mesmerizing synth wave sounds and visually explore frequency manipulation through interactive sliders.',
      path: '/synth/note',
      github:
        'https://github.com/danpops/dans-website/blob/dev/src/pages/synth/note.js'
    }
  ]
  return { props: { id, title, data, showHomer: false } }
}
export default function ProjectsPage ({ data }) {
  const router = useRouter()
  const onClickDemo = link => () => router.push(link)
  return (
    <WindowsContainers style={{ padding: '0.5rem' }}>
      <BodyText id='project-title'>
        Personal projects I have developed.
      </BodyText>
      <ProjectContainer id='projects-container'>
        {data.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            info={item.info}
            onClickDemo={onClickDemo(item.path)}
            github={item.github}
          />
        ))}
      </ProjectContainer>
    </WindowsContainers>
  )
}

ProjectsPage.getLayout = getWindowLayout
