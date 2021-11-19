import styled from 'styled-components'

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid: auto / 300px 300px 300px;
`

export const ItemWrapper = styled.div`
  border: 1px solid #f0f0f0;
  padding: 16px;
`

export const ImgWrapper = styled.img`
  width: 256px;
  height: 224px;
`

export const DescWrapper = styled.div`
  text-align: left;
  margin: 12px 0 17px 0;
  color: #000;
`

export const PriceWrapper = styled.div`
  color: #000;
  font-size: 25px;
  font-weight: 700;
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
`
