import { useState } from 'react'
import * as S from './styles'

import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'

export type Products = {
  id?: string
  title?: string
  image?: {
    id: string
    url: string
  }
}

export type CatalogProps = {
  products?: Products[]
}

const Catalog = ({ products }: CatalogProps) => {
  const [value, setValue] = useState<number | null>(1)

  console.log(products)

  return (
    <S.CatalogContainer>
      {products?.map((product, index) => (
        <S.ItemWrapper key={index}>
          <S.ImgWrapper src={product?.image?.url} />
          <S.DescWrapper>{product.title}</S.DescWrapper>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          />
          <S.Row>
            <S.PriceWrapper>$ 88</S.PriceWrapper>
            <select></select>
          </S.Row>
          <Button variant="outlined" sx={{ width: '100%' }}>
            Add to cart
          </Button>
        </S.ItemWrapper>
      ))}
    </S.CatalogContainer>
  )
}

export default Catalog
