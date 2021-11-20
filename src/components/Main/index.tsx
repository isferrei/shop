import { useQuerySubscription } from 'react-datocms'
import { useState } from 'react'
import * as S from './styles'

import Catalog from '../Catalog'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { TextField } from '@material-ui/core'

const sortBy = [
  {
    value: 'rating',
    label: 'Rating'
  },
  {
    value: 'price',
    label: 'Price'
  }
]

const Main = () => {
  const [sortValue, setSortValue] = useState('')

  const handleChange = (event) => {
    setSortValue(event.target.value)
  }

  const { data } = useQuerySubscription({
    enabled: true,
    query: `
      query AppQuery($first: IntType) {
        products: allProducts (first: $first) {
          id
          title
          price
          image {
            id
            url
          }
        }
      }`,
    variables: { first: 10 },
    token: '19ee77d3c10248cc19a5ba9e955067'
  })

  const products = data ? data.products : []

  return (
    <S.Wrapper>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <TextField
          select
          id="select-raiting"
          label="SORT BY"
          value={sortValue}
          onChange={handleChange}
        >
          {sortBy.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <Catalog product={products} />
    </S.Wrapper>
  )
}

export default Main
