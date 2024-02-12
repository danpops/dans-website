import client from '@/cms/client'
import { GET_PROJECTS } from '@/cms/queries'
import { getWindowLayout } from '@/components/Layout'
import { WindowsContainers } from '@/components/Layout/styles'
import ProjectCard from '@/components/ProjectCard'
import { ProjectContainer } from '@/components/ProjectCard/styles'
import { BodyText } from '@/components/Text'
import { useRouter } from 'next/router'

export async function getServerSideProps () {
  const id = 'projects'
  const data = await client.fetch(GET_PROJECTS)
  const title = data.title
  return { props: { id, title, data, homer: false } }
}
export default function ProjectsPage ({ data }) {
  const router = useRouter()
  const onClickDemo = link => () => router.push(link)
  return (
    <WindowsContainers style={{ padding: '0.5rem' }}>
      <BodyText id='project-title'>{data.summary}</BodyText>
      <ProjectContainer id='projects-container'>
        {data.projectCards.map((item, index) => (
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
