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
  TracklistContainer
} from './styles'

const RELEASE_URL = 'https://discogs.com/release/'

export default function RecordDetail ({ release }) {
  const discogsLink = `${RELEASE_URL}${release.id}`
  return (
    <ReleaseContent id='record-detail'>
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
      <AlbumInfo id='album-info'>
        <ReleaseText id='album-title'>
          Title: <Span>{release.title}</Span>
        </ReleaseText>
        <ReleaseText id='album-artist'>
          Artist: <Span>{release.artist}</Span>
        </ReleaseText>
        <ReleaseText id='album-release'>
          Release Year: <Span>{release.releaseYear}</Span>
        </ReleaseText>
        <ReleaseText id='album-format'>
          Format: <Span>{release.formats}</Span>
        </ReleaseText>
        <ReleaseText id='album-labels'>
          Labels: <Span>{release.labels}</Span>
        </ReleaseText>
        <ReleaseText id='album-genres'>
          Genres: <Span>{release.genres}</Span>
        </ReleaseText>
        <ReleaseText id='album-country'>
          Country: <Span>{release.country}</Span>
        </ReleaseText>
      </AlbumInfo>
      <Tracklist tracklist={release.tracklist} />
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
function Tracklist ({ tracklist }) {
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
