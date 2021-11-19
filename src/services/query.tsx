import { useQuerySubscription } from 'react-datocms'

const App: React.FC = () => {
  const { status, error, data } = useQuerySubscription({
    enabled: true,
    query: `
      query AppQuery($first: IntType) {
        products: allProducts (first: $first) {
          id
          title
          image {
            id
            url
          }
        }
      }`,
    variables: { first: 10 },
    token: '19ee77d3c10248cc19a5ba9e955067'
  })

  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed'
  }

  return (
    <div>
      <p>Connection status: {statusMessage[status]}</p>
      {error && (
        <div>
          <h1>Error: {error.code}</h1>
          <div>{error.message}</div>
          {error.response && (
            <pre>{JSON.stringify(error.response, null, 2)}</pre>
          )}
        </div>
      )}
      {data && (
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
