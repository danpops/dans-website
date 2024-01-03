import Copyright from '../Copyright'
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
          src={release.thumb}
          alt={`${release.title} album cover`}
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
            {release.artists
              .map(item => item.name.replace(/\(\d+\)/g, '').trim())
              .join(', ')}
          </AlbumText>
          <AlbumText>
            <span>Format: </span>
            {release.formats.map(item => item.name).join(', ')}
          </AlbumText>
          <AlbumText>
            <span>Genres: </span>
            {release.genres.join(', ')}
          </AlbumText>
          <AlbumText>
            <span>Styles: </span>
            {release.styles.join(', ')}
          </AlbumText>
          <AlbumText>
            <span>Date Added: </span>
            {release.dateAdded}
          </AlbumText>
        </AlbumTextContainer>
      </InfoContainer>
      <Copyright />
    </DetailContainer>
  )
}
