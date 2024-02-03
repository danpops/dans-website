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
import { Anchor, Heading3 } from '../Text'
import {
  ReleaseText,
  Span,
  RecordImage,
  ImageContainer,
  AlbumInfo,
  TracklistContainer,
  AlbumHeading,
  InfoContainer,
  AlbumTextContainer,
  LinkText,
  BarContainer,
  HaveBar,
  WantBar,
  BarWrapper,
  BarText
} from './styles'

export function ReleaseHeading ({ release }) {
  return (
    <AlbumHeading>
      <ImageContainer>
        <RecordImage
          id='album-cover-art'
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
export function AlbumText ({ id, label, value }) {
  return (
    <AlbumTextContainer id={id}>
      <ReleaseText>{label}</ReleaseText>
      <Span>{value}</Span>
    </AlbumTextContainer>
  )
}
export function ReleaseTracklist ({ tracklist }) {
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
export function ReleaseLink ({ id }) {
  const discogsLink = `https://discogs.com/release/${id}`
  return (
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
  )
}
export function CommunityBar ({ community }) {
  const haveRelease = parseInt(community.have)
  const wantRelease = parseInt(community.want)
  const total = haveRelease + wantRelease
  const havePercentage = (haveRelease / total) * 100
  const wantPercentage = (wantRelease / total) * 100
  return (
    <BarContainer id='album-community-stats'>
      <Heading3>Community Stats</Heading3>
      <BarWrapper id='have-release-bar'>
        <BarText>Have Release</BarText>
        <HaveBar have={havePercentage}>{haveRelease}</HaveBar>
      </BarWrapper>
      <BarWrapper id='want-release-bar'>
        <BarText>Want Release</BarText>
        <WantBar want={wantPercentage}>{wantRelease}</WantBar>
      </BarWrapper>
    </BarContainer>
  )
}
