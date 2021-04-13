import * as S from './styles'
import Button from "components/Button";

export type HighlightProps = {
  title: string
  subtitle: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  floatImage,
  buttonLink,
  backgroundImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title}/>}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
