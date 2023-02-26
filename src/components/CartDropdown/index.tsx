import { GameItemProps } from 'components/GameItem'
import * as S from './styles'
import Dropdown from 'components/Dropdown'
import CartIcon from 'components/CartIcon'
import CartList from 'components/CardList'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total}></CartList>
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
