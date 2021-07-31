import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.node
  settings: SliderSettings
}

const Slider = ({ children, settings }) => (
  <S.Wrapper>
    <Slider {...settings}>{children}</Slider>
  </S.Wrapper>
)

export default Slider
