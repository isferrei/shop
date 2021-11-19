import styled from 'styled-components'

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 288px));
  place-content: center;
  width: 100%;
  gap: 24px;
  margin-top: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(175px, 175px));
  }
`

export const ItemWrapper = styled.div`
  border: 1px solid #f0f0f0;
  padding: 16px;
  max-width: 288px;

  @media only screen and (max-width: 768px) {
    width: 175px;
  }
`

export const ImgWrapper = styled.img`
  width: 256px;
  height: 224px;
  @media only screen and (max-width: 768px) {
    width: 157px;
    height: auto;
  }
`

export const DescWrapper = styled.div`
  text-align: left;
  margin: 12px 0 17px 0;
  font-size: 16px;
  height: 74px;
  width: 256px;
  line-height: 150%;
  color: #000;

  @media only screen and (max-width: 768px) {
    width: 157px;
    font-size: 14px;
  }
`

export const PriceWrapper = styled.div`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 24px;
  margin-top: 14px;
`
export const SelectWrapper = styled.div`
  width: 90px;
  .css-ghsjzk-muiinputbase-root-muiinput-root {
    font-size: 16px;
  }
`
