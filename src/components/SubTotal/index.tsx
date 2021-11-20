import { useContext, useEffect } from 'react'
import * as S from './styles'
import { ProductsContext } from '../../context/productsContext'

import Badge from '@mui/material/Badge'

const SubTotal = () => {
  const { products } = useContext(ProductsContext)

  const getTotal = () => {
    if (products) {
      const total = products.reduce(
        (totalPrice, curr) => totalPrice + curr.price * curr.quantity,
        0
      )
      console.log(total)
      return total.toFixed(2)
    } else {
      return 0
    }
  }

  const getQty = () => {
    if (products) {
      const qty = products.reduce(
        (totalQty, curr) => totalQty + curr.quantity,
        0
      )
      console.log(qty)
      return qty
    } else {
      return 0
    }
  }

  useEffect(() => {
    getTotal()
    getQty()
  }, [products])

  return (
    <S.SubTotalContainer>
      <Badge color="error" badgeContent={getQty()}>
        <S.CartIcon src="/img/cart.svg" alt="Shopping cat icon" />
      </Badge>
      <span>Sub total: {getTotal()} €</span>
    </S.SubTotalContainer>
  )
}

export default SubTotal
