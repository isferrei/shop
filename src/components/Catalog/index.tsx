import { useState } from 'react'
import * as S from './styles'

import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export type Products = {
  id?: string
  title?: string
  price?: number
  image?: {
    id: string
    url: string
  }
}

export type CatalogProps = {
  products?: Products[]
}

const quantities = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  }
]

const Catalog = ({ products }: CatalogProps) => {
  const [value, setValue] = useState<number | null>(1)
  const [quantity, setQuantity] = useState<number | null>(1)

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

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
            <S.PriceWrapper>€{product.price}</S.PriceWrapper>
            <S.SelectWrapper>
              <TextField
                id="standard-select"
                select
                fullWidth
                label="" 
                variant="standard"
                value={quantity}
                onChange={handleChange}
              >
                {quantities.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </S.SelectWrapper>
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
