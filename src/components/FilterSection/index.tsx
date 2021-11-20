import * as S from './styles'
import { useState } from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import products from '../../context/productsContext'

interface State {
  max_price: string
  min_price: string
  rating_amount: string
}

const ratings = [
  {
    value: '>1',
    label: '1 and above'
  },
  {
    value: '>3',
    label: '3 and above'
  },
  {
    value: '<1',
    label: '1 and below'
  }
]

const FilterSection = () => {
  const [values, setValues] = useState<State>({
    max_price: '',
    min_price: '',
    rating_amount: ''
  })

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  console.log(products)

  return (
    <S.SectionContainer>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <S.InputsWrapper>
          <OutlinedInput
            id="outlined-adornment-max_price"
            value={values.max_price}
            onChange={handleChange('max_price')}
            startAdornment={
              <InputAdornment position="start">€ </InputAdornment>
            }
            aria-describedby="outlined-max_price"
            inputProps={{
              'aria-label': 'max_price'
            }}
            placeholder="max"
          />
          <OutlinedInput
            id="outlined-adornment-min_price"
            value={values.min_price}
            onChange={handleChange('min_price')}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            aria-describedby="outlined-min_price"
            inputProps={{
              'aria-label': 'min_price'
            }}
            placeholder="min"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="RATING"
            value={values.rating_amount}
            onChange={handleChange('rating_amount')}
            placeholder="Please select rating amount"
          >
            {ratings.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </S.InputsWrapper>
      </FormControl>
      <S.ButtonWrapper>
        <Button variant="outlined">Apply filters</Button>
      </S.ButtonWrapper>
    </S.SectionContainer>
  )
}

export default FilterSection
