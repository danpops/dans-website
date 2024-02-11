import {
  LinkContainer,
  LinkItem,
  ProjectCardWrapper,
  ProjectInfo,
  ProjectTitle
} from './styles'

export default function ProjectCard ({ title, info, onClickDemo, github }) {
  return (
    <ProjectCardWrapper id='project-card'>
      <ProjectTitle id='project-card-title'>{title}</ProjectTitle>
      <ProjectInfo id='project-card-info'>{info}</ProjectInfo>
      <LinkContainer id='project-card-links'>
        <LinkItem
          id='github-link'
          target='_blank'
          rel='noopener noreferrer'
          href={github}
        >
          Github
        </LinkItem>
        <LinkItem id='demo-link' onClick={onClickDemo}>
          Demo
        </LinkItem>
      </LinkContainer>
    </ProjectCardWrapper>
  )
}
