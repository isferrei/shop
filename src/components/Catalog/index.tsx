import { useState, useContext, useEffect, FormEvent, useCallback } from 'react'
import { ProductsContext } from '../../context/productsContext'
import * as S from './styles'

import Backdrop from '@mui/material/Backdrop'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Snackbar from '@mui/material/Snackbar'
import Pagination from '../Pagination'
import CircularProgress from '@mui/material/CircularProgress'

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
  product?: IDataProducts[]
  maxPrice?: number
  minPrice?: number
  searchBy?: string
}

const sortOptions = [
  {
    value: 'rating',
    label: 'Rating'
  },
  {
    value: 'price',
    label: 'Price'
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
    value: '1',
    label: '1 and above'
  },
  {
    value: '1',
    label: '3 and above'
  }
]

const Catalog = ({ product, searchBy }: CatalogProps) => {
  const [rating, setRating] = useState<IProductRating[]>([])
  const [quantity, setQuantity] = useState<IProductQuantity[]>([])
  const [cartItems, setCartItems] = useState<IProducts[] | undefined>([])
  const [filteredItems, setFilteredItems] = useState<
    IDataProducts[] | undefined
  >(product)
  const [myProducts, setMyProducts] = useState<IDataProducts[] | undefined>(
    product
  )
  const { setProducts } = useContext(ProductsContext)
  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()
  const [ratingAmount, setRatingAmount] = useState<number>()
  const [sortBy, setSortBy] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [addedItem, setAddedItem] = useState<string | undefined>('')
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [onLoad, setOnLoad] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const onPageChanged = useCallback(
    (event: FormEvent, page: number) => {
      event.preventDefault()
      setCurrentPage(page)
    },
    [currentPage]
  )

  const handleClose = (reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  useEffect(() => {
    if (filteredItems) {
      if (filteredItems?.length === 0 && product) {
        setOnLoad(false)
        setFilteredItems(product)
        setMyProducts(product)
      } else {
        setOnLoad(true)
      }
    }
  })

  useEffect(() => {
    sortItems()
  }, [searchBy, sortBy])

  const sortItems = () => {
    if (sortBy && product) {
      return setFilteredItems(product.sort(dynamicSort(sortBy)))
    }
    if (searchBy && product) {
      return searchItems(searchBy)
    }
  }

  const searchItems = (searchBy: string) => {
    setFilteredItems(
      product?.filter((item) =>
        JSON.stringify(item.title)
          .toLowerCase()
          .includes(searchBy.toLowerCase())
      )
    )
  }

  const dynamicSort = (sortBy: string) => {
    let sortOrder = 1
    if (sortBy[0] === '-') {
      sortOrder = -1
      sortBy = sortBy.substr(1)
    }
    return function (a, b) {
      let result = a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0
      return result * sortOrder
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    filterProducts(minPrice, maxPrice, ratingAmount)
  }

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setRatingAmount(event.target.value)
  }

  const filterProducts = (
    minPrice: number | undefined,
    maxPrice: number | undefined,
    ratingAmount: number | undefined
  ) => {
    if (product) {
      if (maxPrice) {
        return setFilteredItems(
          product?.filter((item) => item.price <= maxPrice)
        )
      } else if (minPrice) {
        return setFilteredItems(
          product?.filter((item) => item.price >= minPrice)
        )
      } else if (ratingAmount) {
        return setFilteredItems(
          myProducts?.filter((item) => item.rating <= ratingAmount)
        )
      } else {
        return setFilteredItems(
          product?.filter(
            (item) =>
              item.price <= maxPrice ||
              item.price >= minPrice ||
              item.rating <= ratingAmount
          )
        )
      }
    }
  }

  const getAddedItem = (currentItem: string | undefined) => {
    if (addedItem === currentItem) {
      return true
    } else {
      return false
    }
  }

  const handleRating = (rate: number | undefined, id: string | undefined) => {
    let itemIndex = rating.findIndex((item) => item.id === id)
    let prodItem = myProducts?.findIndex((item) => item.id === id)

    if (myProducts && prodItem) {
      if (prodItem > -1) {
        myProducts.splice(prodItem, 1)
        setMyProducts([
          ...myProducts,
          {
            title: myProducts[prodItem].title,
            image: myProducts[prodItem].image,
            id: id,
            rating: rate
          }
        ])
      } else {
        setMyProducts([
          ...myProducts,
          {
            title: myProducts[prodItem].title,
            image: myProducts[prodItem].image,
            id: id,
            rating: rate
          }
        ])
      }
    }
    if (itemIndex > -1) {
      rating.splice(itemIndex, 1)
      setRating([...rating, { id: id, rating: rate }])
    } else {
      setRating([...rating, { id: id, rating: rate }])
    }
  }

  const getItemRate = (currentItem: string | undefined) => {
    const res = rating?.filter((item) => item.id === currentItem)

    if (res) {
      if (res.length > 0) {
        return res[0].rating
      } else {
        return 1
      }
    }
  }

  const handleItemQuantity = (qty: number, id: string | undefined) => {
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

  const handleItem = (id: string | undefined, title: string, price: number) => {
    if (cartItems) {
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
      setOpen(true)
    }
  }

  return (
    <>
      <S.FiltersContainer showFilters={showFilters}>
        <S.FormControl onSubmit={(event) => handleSubmit(event)}>
          <S.InputsWrapper>
            <OutlinedInput
              size="small"
              sx={{ width: '112px' }}
              id="outlined-adornment-max_price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
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
              onChange={(e) => setMinPrice(Number(e.target.value))}
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
              select
              sx={{ width: '112px' }}
              size="small"
              label="RATING"
              value={String(ratingAmount)}
              onChange={handleChange}
            >
              {ratings.map((option, index) => (
                <MenuItem key={`rate-` + index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </S.InputsWrapper>
          <S.ButtonWrapper>
            <Button
              variant="outlined"
              type="submit"
              onClick={() => setShowFilters(false)}
            >
              Apply filters
            </Button>
          </S.ButtonWrapper>
          <S.MobileTitle>Filters</S.MobileTitle>
        </S.FormControl>
        <S.CloseBtn
          src="/img/close.svg"
          onClick={() => setShowFilters(!showFilters)}
        />
      </S.FiltersContainer>
      <S.MobileOptions>
        <S.SortByWrapper>
          <TextField
            select
            id="select-raiting"
            size="small"
            fullWidth
            label="SORT BY"
            value={sortBy}
            onChange={(event) => {
              setSortBy(event.target.value)
              sortItems()
            }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>{' '}
        </S.SortByWrapper>
        <S.FiltersBtn onClick={() => setShowFilters(true)}>
          Filters
        </S.FiltersBtn>
      </S.MobileOptions>
      <S.CatalogContainer>
        {filteredItems?.map((prod, index) => (
          <S.ItemWrapper key={index}>
            <S.ImgWrapper src={prod.image?.url} />
            <S.DescWrapper>{prod.title}</S.DescWrapper>
            <Rating
              name="simple-controlled"
              value={getItemRate(prod.id)}
              onChange={(event, value) => {
                handleRating(value, prod.id)
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
                    handleItemQuantity(Number(event.target.value), prod.id)
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
              onClick={() => {
                handleItem(prod.id, prod.title, prod.price)
                setAddedItem(prod.id)
              }}
            >
              {getAddedItem(prod.id) && open ? (
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
      <Pagination
        totalRecords={product?.length}
        pageLimit={5}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <S.Alert onClick={() => handleClose}>
          <S.IconWrapper src="/img/check-bold.svg" />
          Added to cart successfully
        </S.Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!onLoad}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Catalog
