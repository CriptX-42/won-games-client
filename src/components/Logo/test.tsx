import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //? Renderizar o componente `render`

    //? Selecionar o elemento a testar `screen`

    //? expect - assertion - asserção - comparação - analise (espero que renderize a logo branca)
    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement)
    .toHaveStyle({color:'#FAFAFA'})
  })

  it('should render a black label when colors is passed', () => {

    renderWithTheme(<Logo  color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
