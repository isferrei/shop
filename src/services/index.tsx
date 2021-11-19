import { useQuerySubscription } from 'react-datocms'

const GetData: React.FC = () => {
  const { status, error, data } = useQuerySubscription({
    enabled: true,
    query: `
      query AppQuery($first: IntType) {
       allProducts {
          id
          title
          image {
            id
            url
          }
        }
      }`,
    variables: { first: 10 },
    token: '4494e66f56c855dbaa0617ae41a7c3'
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
          {data.allProducts.map((product) => (
            <li key={product.slug}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GetData
