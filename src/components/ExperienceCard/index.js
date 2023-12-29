import Image from 'next/image'
import { Heading3, Heading4, Heading5 } from '@/components/Text'

export default function ExperienceCard ({ item }) {
  return (
    <div id='experience-card'>
      <Image
        id='company-logo'
        src={item.logo}
        alt={`${item.company}-logo`}
        width={100}
        height={100}
      />
      <Heading5 id='experience-date'>{item.date}</Heading5>
      <Heading3 id='experience-title'>{item.title}</Heading3>
      <Heading4 id='experience-company'>{item.company}</Heading4>
      <Heading5 id='experience-tech'>{item.technologies.join(' - ')}</Heading5>
      <ul id='experience-details'>
        {item.notes.map((note, nIndex) => (
          <li key={nIndex} id='experience-detail'>
            <p>{note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
