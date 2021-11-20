import React from 'react'

export const ProductsContext = React.createContext<IProducts[]>([])

const ProductsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [products, setProducts] = React.useState<IProducts[]>()
  const [filters, setFilters] = React.useState<IProducts[]>()


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
