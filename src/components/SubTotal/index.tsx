import { useState, useContext } from 'react'
import * as S from './styles'

import Badge from '@mui/material/Badge' 

const SubTotal = () => {
  const [count, setCount] = useState(0)

  const getTotal = () => {}

  return (
    <S.SubTotalContainer>
      <Badge color="error" badgeContent={count}>
        <S.CartIcon
          src="/img/cart.svg"
          alt="Shopping cat icon"
          onClick={() => setCount(1)}
        />
      </Badge>
      <span>Sub total: {getTotal()} €</span>
    </S.SubTotalContainer>
  )
}

export default SubTotal
