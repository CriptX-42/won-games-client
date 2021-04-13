import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  backgroundImage: '/img/red-dead-img.svg',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
     expect(container.firstChild).toHaveStyle({
       backgroundImage: `url(${props.backgroundImage})`
     })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.svg" />)
     expect(screen.getByRole('img', {name: props.title})).toHaveAttribute(
       'src',
       '/float-image.svg'
     )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
     expect(container.firstChild).toHaveStyleRule('grid-template-areas',"'floatimage content'")
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} alignment="left" />)
     expect(container.firstChild).toHaveStyleRule('grid-template-areas',"'content floatimage'")
  })
})
