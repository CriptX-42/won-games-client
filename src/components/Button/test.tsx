import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddshoppingCart } from '@styled-icons/material/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background: linear-gradient(180deg,#ff5f5f 0%,#f062c0 50%);
        color: #FAFAFA;
        border: 0;
        curson: pointer;
        border-radius: 0.4rem;
        padding: 0.8rem;
        height: 4rem;
        font-size: 1.4rem;
        padding: 0.8rem 3.2rem;
      }

      <button
        class="c0"
      >
        <span>
          Buy now
        </span>
      </button>
    `)
  })

  it('should render the small', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render the large', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddshoppingCart data-testid="icon" />}>Buy now</Button>
    )
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
