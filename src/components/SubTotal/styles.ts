import styled from 'styled-components'

export const SubTotalContainer = styled.div`
  background: #2264d1;
  width: 232px;
  height: 48px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 19px;
  gap: 10px;

  span {
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 2%;
    left: 3%;
    right: 3%;
    width: 94%;
    z-index: 2;
    justify-content: center;
  }
`

export const CartIcon = styled.img`
  width: 17px;
  height: 17px;
`
