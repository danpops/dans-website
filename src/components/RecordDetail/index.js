import { WindowContainer } from '../Layout/styles'
import WindowHeader from '../Layout/WindowHeader'
import { Anchor, BodyText } from '../Text'
import {
  Overlay,
  ReleaseContent,
  ReleaseText,
  Span,
  WindowWrapper,
  RecordImage,
  ImageContainer
} from './styles'

const RELEASE_URL = 'https://discogs.com/release/'
export default function RecordDetail ({ release, onClose }) {
  const discogsLink = `${RELEASE_URL}${release.id}`
  return (
    <>
      <Overlay />
      <WindowWrapper>
        <WindowContainer id='release-window'>
          <WindowHeader id='release' title='Album Release' onExit={onClose} />
          <ReleaseContent>
            {release.coverImage && (
              <ImageContainer>
                <RecordImage
                  src={release.coverImage}
                  alt='album cover'
                  width={50}
                  height={50}
                />
              </ImageContainer>
            )}
            <div>
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
            </div>
            <BodyText style={{ marginTop: '1rem' }}>
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
            </BodyText>
          </ReleaseContent>
        </WindowContainer>
      </WindowWrapper>
    </>
  )
}
