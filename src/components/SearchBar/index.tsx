import InputBase from '@mui/material/InputBase'

import * as S from './styles'

const SearchBar = () => (
  <S.SearchBarContainer>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search item"
      inputProps={{ 'aria-label': 'search item' }}
    />
    <S.IconButton type="submit" aria-label="search">
      <S.SearchIcon src="/img/search.svg" alt="Search icon" />
    </S.IconButton>
  </S.SearchBarContainer>
)

export default SearchBar
