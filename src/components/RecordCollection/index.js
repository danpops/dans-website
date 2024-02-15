import Image from 'next/image'
import { LoadingContainer } from '@/components/RecordTable/styles'
import hourglassGif from 'public/gifs/hourglass.gif'
import {
  CardArtist,
  CardContainer,
  CardDetailsContainer,
  CardImageContainer,
  CardTitle,
  CardWrapper,
  CollectionContainer,
  RecordImage
} from './styles'
import { ControlContainer, ToggleContainer } from '../Synth/styles'
import { ToggleButton } from '../Button'

export function RecordCollection (props) {
  const { myCollection, loading, onClickRelease } = props
  const onClickCard = release => () => onClickRelease(release)
  if (loading) {
    return (
      <LoadingContainer>
        <Image src={hourglassGif} alt='loading hourglass' width={40} />
      </LoadingContainer>
    )
  }
  return (
    <CollectionContainer id='record-collection'>
      {myCollection.map(release => (
        <CollectionCard
          key={release.id}
          release={release}
          onClickCard={onClickCard}
        />
      ))}
    </CollectionContainer>
  )
}
function CollectionCard ({ release, onClickCard }) {
  return (
    <CardWrapper id='album-release-row' onClick={onClickCard(release)}>
      <CardContainer>
        <CardImageContainer>
          <RecordImage
            src={release.thumbImage}
            alt={`${release.title} album artwork`}
            width={50}
            height={50}
          />
        </CardImageContainer>
        <CardDetailsContainer>
          <CardTitle>{release.title}</CardTitle>
          <CardArtist>{release.artist}</CardArtist>
        </CardDetailsContainer>
      </CardContainer>
    </CardWrapper>
  )
}
const SORT_KEYS = ['Artist', 'Title', 'Added']
export function RecordSorting (props) {
  const { onUpdateSorting, onUpdateSortOrder, sorting } = props
  return (
    <ControlContainer>
      <ToggleContainer>
        {SORT_KEYS.map(item => {
          const sortKey = item.toLowerCase()
          return (
            <ToggleButton
              key={item}
              label={item}
              active={sorting.sortKey === sortKey}
              onClick={() => onUpdateSorting(sortKey)}
            />
          )
        })}
      </ToggleContainer>
      <ToggleContainer>
        <ToggleButton
          label='Asc'
          active={sorting.sortOrder === 'asc'}
          onClick={() => onUpdateSortOrder('asc')}
        />
        <ToggleButton
          label='Desc'
          active={sorting.sortOrder === 'desc'}
          onClick={() => onUpdateSortOrder('desc')}
        />
      </ToggleContainer>
    </ControlContainer>
  )
}
