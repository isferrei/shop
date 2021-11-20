interface IProducts {
  id: string
  title: string
  price: number
  quantity: number
  rating: number
}

type ContextType = {
  products: IProducts[]
  saveProduct: (product: IProducts) => void
  updateProduct: (id: number) => void
}
