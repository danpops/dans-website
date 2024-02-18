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
  RecordImage,
  SortingContainer,
  ToggleGroupWrapper
} from './styles'
import { ToggleButton } from '../Button'
import { SortChevron } from '../Table'

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
  const { onUpdateSorting, sorting } = props
  return (
    <SortingContainer>
      <ToggleGroupWrapper>
        {SORT_KEYS.map((item, index) => (
          <SortButton
            key={index}
            item={item}
            sorting={sorting}
            onUpdateSorting={onUpdateSorting}
          />
        ))}
      </ToggleGroupWrapper>
    </SortingContainer>
  )
}
function SortButton ({ item, sorting, onUpdateSorting }) {
  const sortKey = item.toLowerCase()
  const isActive = sorting.sortKey === sortKey
  return (
    <ToggleButton
      icon={isActive && <SortChevron order={sorting.sortOrder} />}
      active={isActive}
      label={item}
      onClick={() => onUpdateSorting(sortKey)}
    />
  )
}
