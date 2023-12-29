import Image from 'next/image'
import { Heading3, Heading4, Heading5 } from '@/components/Text'
import styled from 'styled-components'

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 2rem;
`

export default function ExperienceCard ({ item }) {
  return (
    <div id='experience-card'>
      <CardHeader>
        <Image
          id='company-logo'
          src={item.logo}
          alt={`${item.company}-logo`}
          width={100}
          height={100}
        />
        <div>
          <Heading5 id='experience-date'>{item.date}</Heading5>
          <Heading3 id='experience-title'>{item.title}</Heading3>
          <Heading4 id='experience-company'>{item.company}</Heading4>
          <Heading5 id='experience-tech'>
            {item.technologies.join(' - ')}
          </Heading5>
        </div>
      </CardHeader>
      <div id='experience-details'>
        {item.notes.map((note, nIndex) => (
          <p key={nIndex} id='experience-detail'>
            {note}
          </p>
        ))}
      </div>
    </div>
  )
}
