import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #000;

  @media only screen and (max-width: 768px) {
    gap: 30px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const LanguagesWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.img`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    width: 18px;
    height: auto;
  }
`

export const SearchBarWrapper = styled.div`
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
    max-width: 290px;
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

export const UtilitiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const Wrapper = styled.main`
  background-color: #fff;
  color: #000;
  width: 100%;
  padding: 0.188rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 1.4rem;
`
