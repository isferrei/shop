import { useQuerySubscription } from 'react-datocms'
import { useState } from 'react'
import * as S from './styles'

import Catalog from '../Catalog'
import SubTotal from 'components/SubTotal'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputBase from '@mui/material/InputBase'

const languages = ['English', 'Deustch']

const Main = () => {
  const [searchValue, setSearchValue] = useState('')

  const { data } = useQuerySubscription({
    enabled: true,
    query: `
      query AppQuery($first: IntType) {
        products: allProducts (first: $first) {
          id
          title
          price
          image {
            id
            url
          }
        }
      }`,
    variables: { first: 10 },
    token: '19ee77d3c10248cc19a5ba9e955067'
  })

  const products = data ? data.products : []

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.LogoWrapper>
          <h1>LOGO</h1>
        </S.LogoWrapper>
        <S.SearchBarWrapper>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search item"
            inputProps={{ 'aria-label': 'search item' }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <S.IconButton type="submit" aria-label="search">
            <S.SearchIcon src="/img/search.svg" alt="Search icon" />
          </S.IconButton>
        </S.SearchBarWrapper>
        <S.UtilitiesWrapper>
          <S.LanguagesWrapper>
            <Select value={languages[0]} size="small">
              <MenuItem disabled value="">
                <em>Select</em>
              </MenuItem>
              {languages.map((language: string) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </S.LanguagesWrapper>
          <S.MobileMenu src="img/menu.svg" />
          <SubTotal />
        </S.UtilitiesWrapper>
      </S.HeaderContainer>
      <Catalog product={products} searchBy={searchValue} />
    </S.Wrapper>
  )
}

export default Main
