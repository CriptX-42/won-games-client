import * as S from './styles'

import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from 'components/Logo'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon arial-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon arial-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon arial-label="open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
