import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderContainer,
  TableHeaderRow,
  TableRow,
  TableText
} from '../Table'
import { Anchor } from '../Text'
import {
  ReleaseContent,
  ReleaseText,
  Span,
  RecordImage,
  ImageContainer,
  LinkText,
  AlbumInfo,
  TracklistContainer,
  AlbumHeading,
  InfoContainer,
  AlbumTextContainer
} from './styles'

const RELEASE_URL = 'https://discogs.com/release/'

export default function ReleaseDetails ({ release }) {
  const discogsLink = `${RELEASE_URL}${release.id}`
  return (
    <ReleaseContent id='record-detail'>
      <ReleaseHeading release={release} />
      <ReleaseTracklist tracklist={release.tracklist} />
      <LinkText id='album-discogs-link'>
        Release information from{' '}
        <Anchor
          style={{ cursor: 'pointer' }}
          href={discogsLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          Discogs
        </Anchor>
        .
      </LinkText>
    </ReleaseContent>
  )
}
function ReleaseHeading ({ release }) {
  return (
    <AlbumHeading>
      <ImageContainer id='record-image'>
        <RecordImage
          src={release.coverImage}
          alt='album cover'
          width={100}
          height={100}
          placeholder='blur'
          blurDataURL={release.thumbImage}
        />
      </ImageContainer>
      <InfoContainer>
        <AlbumInfo id='album-info'>
          <AlbumText id='album-title' label='Title' value={release.title} />
          <AlbumText id='album-artist' label='Artist' value={release.artist} />
          <AlbumText
            id='album-release'
            label='Year'
            value={release.releaseYear}
          />
          <AlbumText
            id='album-country'
            label='Country'
            value={release.country}
          />
          <AlbumText id='album-genres' label='Genre' value={release.genres} />
          <AlbumText id='album-labels' label='Labels' value={release.labels} />
          <AlbumText
            id='album-format'
            label='Formats'
            value={release.formats}
          />
        </AlbumInfo>
      </InfoContainer>
    </AlbumHeading>
  )
}
function AlbumText ({ id, label, value }) {
  return (
    <AlbumTextContainer id={id}>
      <ReleaseText>{label}</ReleaseText>
      <Span>{value}</Span>
    </AlbumTextContainer>
  )
}
function ReleaseTracklist ({ tracklist }) {
  return (
    <TracklistContainer id='album-tracklist'>
      <Table>
        <TableHead>
          <TableHeaderRow>
            <TableHeaderContainer>
              <TableText>Position</TableText>
            </TableHeaderContainer>
            <TableHeaderContainer>
              <TableText>Title</TableText>
            </TableHeaderContainer>
            <TableHeaderContainer>
              <TableText>Duration</TableText>
            </TableHeaderContainer>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {tracklist.map(track => (
            <TableRow key={track.position}>
              <TableCell>
                <TableText>{track.position}</TableText>
              </TableCell>
              <TableCell>
                <TableText>{track.title}</TableText>
              </TableCell>
              <TableCell>
                <TableText>{track.duration}</TableText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TracklistContainer>
  )
}
