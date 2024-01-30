import { WindowContainer } from '../Layout/styles'
import WindowHeader from '../Layout/WindowHeader'
import { Anchor } from '../Text'
import {
  Overlay,
  ReleaseContent,
  ReleaseText,
  Span,
  WindowWrapper,
  RecordImage,
  ImageContainer,
  LinkText,
  AlbumInfo
} from './styles'

const RELEASE_URL = 'https://discogs.com/release/'
export default function RecordDetail ({ release, onClose }) {
  const discogsLink = `${RELEASE_URL}${release.id}`
  return (
    <>
      <Overlay onClick={onClose} />
      <WindowWrapper>
        <WindowContainer id='release-window'>
          <WindowHeader id='release' title='Album Release' onExit={onClose} />
          <ReleaseContent>
            <AlbumImage src={release.coverImage} thumb={release.thumbImage} />
            <AlbumDetails release={release} />
            <LinkText>
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
        </WindowContainer>
      </WindowWrapper>
    </>
  )
}
function AlbumImage ({ src, thumb }) {
  if (!src) return null
  return (
    <ImageContainer>
      <RecordImage
        src={src}
        alt='album cover'
        width={100}
        height={100}
        placeholder='blur'
        blurDataURL={thumb}
      />
    </ImageContainer>
  )
}
function AlbumDetails ({ release }) {
  return (
    <AlbumInfo>
      <ReleaseText>
        Title: <Span>{release.title}</Span>
      </ReleaseText>
      <ReleaseText>
        Artist: <Span>{release.artist}</Span>
      </ReleaseText>
      <ReleaseText>
        Release Year: <Span>{release.releaseYear}</Span>
      </ReleaseText>
      <ReleaseText>
        Format: <Span>{release.formats}</Span>
      </ReleaseText>
      <ReleaseText>
        Date Added: <Span>{release.dateAdded}</Span>
      </ReleaseText>
    </AlbumInfo>
  )
}
