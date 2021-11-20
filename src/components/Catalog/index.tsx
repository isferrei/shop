import { useState, useContext } from 'react'
import * as S from './styles'
import { ProductsContext } from '../../context/productsContext'

import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

export type Products = {
  id?: string
  title?: string
  price?: number
  quantity?: number
  rating?: number
}

export type CartItems = [
  {
    id: string
    title: string
    price: number
    quantity: number
    rating: number
  }
]

export type CatalogProps = {
  product?: Products[]
  maxPrice?: number
  minPrice?: number
}

export type ProductQuantity = [
  {
    id?: string
    quantity?: number
  }
]

export type ProductRating = [
  {
    id?: string
    rating?: number
  }
]

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

const ratings = [
  {
    value: 1,
    label: '1 and above'
  },
  {
    value: 1,
    label: '3 and above'
  }
]

const Catalog = ({ product }: CatalogProps) => {
  const [rating, setRating] = useState<ProductRating[]>([])
  const [quantity, setQuantity] = useState<ProductQuantity[]>([])
  const [cartItems, setCartItems] = useState<IProducts | any>([])
  const [filteredItems, setFilteredItems] = useState<IProducts | any>()
  const { setProducts } = useContext(ProductsContext)
  const [minPrice, setMinPrice] = useState<number | null>()
  const [maxPrice, setMaxPrice] = useState<number | null>()
  const [ratingAmount, setRatingAmount] = useState<number | null>()

  const handleSubmit = (event) => {
    event.preventDefault()
    filterProducts(minPrice, maxPrice, ratingAmount)

    console.log(minPrice, maxPrice, ratingAmount)
  }

  const filterProducts = (
    maxPrice: number,
    minPrice: number,
    ratingAmount: number
  ) => {
    setFilteredItems(product)

    if (minPrice) {
      return setFilteredItems(
        filteredItems?.filter((item) => item?.price >= minPrice)
      )
    } else if (maxPrice) {
      return setFilteredItems(
        filteredItems?.filter((item) => item?.price <= maxPrice)
      )
    } else if (ratingAmount) {
      return setFilteredItems(
        filteredItems.filter((item) => item.rating <= ratingAmount)
      )
    } else {
      return setFilteredItems(
        filteredItems?.filter(
          (item) =>
            item.rating <= maxPrice ||
            item?.price >= minPrice ||
            item.rating <= ratingAmount
        )
      )
    }
  }

  const getCartItem = (currentItem: string) => {
    const res = cartItems?.find((item) => item.id === currentItem)

    if (res) {
      if (res) {
        return true
      } else {
        return false
      }
    }
  }

  const handleRating = (rate: number, id: string) => {
    let itemIndex = rating.findIndex((item) => item.id === id)
    if (itemIndex > -1) {
      rating.splice(itemIndex, 1)
      setRating([...rating, { id: id, rating: rate }])
    } else {
      setRating([...rating, { id: id, rating: rate }])
    }
  }

  const getItemRate = (currentItem: string) => {
    const res = rating?.filter((item) => item.id === currentItem)

    if (res) {
      if (res.length > 0) {
        return res[0].rating
      } else {
        return 1
      }
    }
  }

  const handleItemQuantity = (qty: number, id: string) => {
    let itemIndex = quantity.findIndex((item) => item.id === id)

    if (itemIndex > -1) {
      quantity.splice(itemIndex, 1)
      setQuantity([...quantity, { id: id, quantity: qty }])
    } else {
      setQuantity([...quantity, { id: id, quantity: qty }])
    }
  }

  const getItemQuantity = (currentItem: string) => {
    const res = quantity?.filter((item) => item.id === currentItem)

    if (res) {
      if (res.length > 0) {
        return res[0].quantity
      } else {
        return 1
      }
    }
  }

  const handleItem = (id: string, title: string, price: number) => {
    setCartItems([
      ...cartItems,
      {
        id: id,
        title: title,
        price: price,
        quantity: getItemQuantity(id),
        rating: getItemRate(id)
      }
    ])

    setProducts(cartItems)
  }

  const sortedProducts = filteredItems ? filteredItems : product
  console.log(filteredItems)

  return (
    <>
      <S.FiltersContainer>
        <S.FormControl onSubmit={(event) => handleSubmit(event)}>
          <S.InputsWrapper>
            <OutlinedInput
              size="small"
              sx={{ width: '112px' }}
              id="outlined-adornment-max_price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
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
              size="small"
              sx={{ width: '112px' }}
              id="outlined-adornment-min_price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              aria-describedby="outlined-min_price"
              inputProps={{
                'aria-label': 'min_price'
              }}
              placeholder="min"
            />
            <TextField
              id="outlined-select-currency"
              select
              sx={{ width: '112px' }}
              size="small"
              label="RATING"
              value={ratingAmount}
              onChange={(e) => setRatingAmount(e.target.value)}
              placeholder="Please select rating amount"
            >
              {ratings.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </S.InputsWrapper>
          <S.ButtonWrapper>
            <Button variant="outlined" type="submit">
              Apply filters
            </Button>
          </S.ButtonWrapper>
        </S.FormControl>
      </S.FiltersContainer>
      <S.CatalogContainer>
        {sortedProducts.map((prod, index) => (
          <S.ItemWrapper key={index}>
            <S.ImgWrapper src={prod?.image?.url} />
            <S.DescWrapper>{prod.title}</S.DescWrapper>
            <Rating
              name="simple-controlled"
              value={getItemRate(prod.id)}
              onChange={(event) => {
                handleRating(event.target.value, prod.id)
              }}
            />
            <S.Row>
              <S.PriceWrapper>€{prod.price}</S.PriceWrapper>
              <S.SelectWrapper>
                <TextField
                  id="standard-select"
                  select
                  fullWidth
                  label=""
                  size="small"
                  variant="outlined"
                  value={getItemQuantity(prod.id)}
                  onChange={(event) =>
                    handleItemQuantity(event.target.value, prod.id)
                  }
                >
                  {quantities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </S.SelectWrapper>
            </S.Row>
            <Button
              variant="outlined"
              sx={{ width: '100%' }}
              onClick={() => handleItem(prod.id, prod.title, prod.price)}
            >
              {getCartItem(prod.id) ? (
                <>
                  <S.IconWrapper src="/img/check.svg" alt="Check icon" />
                  Added
                </>
              ) : (
                'Add to cart'
              )}
            </Button>
          </S.ItemWrapper>
        ))}
      </S.CatalogContainer>
    </>
  )
}

export default Catalog
