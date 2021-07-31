import { Settings } from 'react-slick'
import { Story, Meta } from '@storybook/react/types-6-0'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  backgroud: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem;
  color: white;
  text-align: center;
`

export const Default: Story = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
  </Slider>
)
