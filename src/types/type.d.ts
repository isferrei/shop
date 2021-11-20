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

interface IProductQuantity {
  id?: string
  quantity?: number
}

interface IProductRating {
  id?: string
  rating?: number
}

interface IDataProducts {
  id?: string
  title?: string
  price?: number
  quantity?: number
  rating?: number
  image?: {
    url: string
    id: string
  }
}

interface IPagination {
  totalRecords: number
  pageLimit: number
  pageNeighbours: number
  onPageChanged: expression
  currentPage: number
}

type ContextType = {
  products: IProducts[]
  saveProduct: (product: IProducts) => void
  updateProduct: (id: number) => void
  filters: IFilters[]
}
