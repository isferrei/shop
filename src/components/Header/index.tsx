import Select from '@mui/material/Select'
import Input from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import SearchBar from 'components/SearchBar'
import SubTotal from 'components/SubTotal'

import * as S from './styles'

const languages = ['English', 'Deustch']

const Header = () => (
  <S.HeaderContainer>
    <S.LogoWrapper>
      <h1>LOGO</h1>
    </S.LogoWrapper>
    <SearchBar />
    <S.UtilitiesWrapper>
      <Select value={languages[0]} size='small'>
        <MenuItem disabled value="">
          <em>Select</em>
        </MenuItem>
        {languages.map((language: string) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
      <SubTotal />
    </S.UtilitiesWrapper>
  </S.HeaderContainer>
)

export default Header
