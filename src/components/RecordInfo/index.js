import Copyright from '../Copyright'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow
} from '../RecordTable/styles'
import {
  AlbumText,
  AlbumTextContainer,
  DetailContainer,
  InfoContainer,
  RecordImage
} from './styles'

export default function RecordInfo ({ onClickImage, release }) {
  return (
    <DetailContainer>
      <InfoContainer>
        <RecordImage
          blurDataURL={release.thumb}
          placeholder='blur'
          src={release.thumb}
          alt='release img'
          width={100}
          height={100}
          onClick={onClickImage}
        />
        <AlbumTextContainer>
          <AlbumText>
            <span>Title: </span>
            {release.title}
          </AlbumText>
          <AlbumText>
            <span>Artist: </span>
            {release.artists_sort.replace(/\(\d+\)/g, '').trim()}
          </AlbumText>
          <AlbumText>
            <span>Format: </span>
            {release.formats.map(item => item.name).join(', ')}
          </AlbumText>
          <AlbumText>
            <span>Country: </span>
            {release.country}
          </AlbumText>
          <AlbumText>
            <span>Release Date: </span>
            {release.released}
          </AlbumText>
        </AlbumTextContainer>
      </InfoContainer>
      <Table>
        <TableHead>
          <TableHeaderRow>
            <TableHeader>Pos</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Duration</TableHeader>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {release.tracklist.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.position}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Copyright />
    </DetailContainer>
  )
}
