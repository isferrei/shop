import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #000;
`

export const LogoWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const UtilitiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`
