import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  background: #ededf0;
  height: 48px;
  width: 100%;
  max-width: 438px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 15px;
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`

export const IconButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
`

export const SearchIcon = styled.img`
  width: 17px;
  height: 17px;
`
