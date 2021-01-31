import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode,
  color?: 'white' | 'black',
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    <h2>{children}</h2>
  </S.Wrapper>
)

export default Heading
