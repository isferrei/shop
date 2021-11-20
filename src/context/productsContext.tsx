import React from 'react'

export const ProductsContext = React.createContext<IProducts[]>([])

const ProductsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [products, setProducts] = React.useState<IProducts[]>([
    {
      id: '',
      title: '',
      price: 0,
      quantity: 0,
      rating: 0
    }
  ])

  // const saveProduct = (product: IProducts) => {
  //   const newProduct: IProducts = {
  //     id: product.id,
  //     title: product.title,
  //     price: product.price,
  //     quantity: product.quantity,
  //     rating: product.rating
  //   }
  //   setProducts([...products, newProduct])
  // }

  // const updateProduct = (id: string) => {
  //   products.filter((product: IProducts) => {
  //     if (product.id === id) {
  //       setProducts([...products])
  //     }
  //   })
  // }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
