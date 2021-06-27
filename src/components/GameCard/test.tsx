import { render, screen } from '@testing-library/react'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.price })
    ).toBeInTheDocument()
    expect(
      screen.getByRole(screen.getByLabelText(/add to wishlist/i))
    ).toBeInTheDocument()
  })
})
