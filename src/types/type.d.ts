interface IProducts {
  id: string
  title: string
  price: number
  quantity: number
  rating: number
}

interface IFilters {
  max_price?: number
  min_price?: number
  rating_amount?: number
}

type ContextType = {
  products: IProducts[]
  saveProduct: (product: IProducts) => void
  updateProduct: (id: number) => void
  filters: IFilters[]
}
