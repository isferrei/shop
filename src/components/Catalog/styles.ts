import styled from 'styled-components'

export const FiltersContainer = styled.div<{ showFilters: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background: #f9f9f9;
  margin-top: 34px;

  @media only screen and (max-width: 768px) {
    display: ${({ showFilters }) => (showFilters ? 'flex' : 'none')};
    position: absolute;
    bottom: 0;
    z-index: 2;
    background: #fff;
    flex-direction: column;
    height: 424px;
    box-shadow: 0 -5px 1000px #000;
  }
`

export const Alert = styled.div`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(59, 69, 123, 0.2),
    0px 4px 8px rgba(92, 107, 192, 0.2);
  border-radius: 4px;
  padding: 26px 189px;
  align-items: center;
`

export const SortByWrapper = styled.div`
  width: 200px;
`

export const FormControl = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  align-items: center;
  gap: 16px;
  max-width: 600px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const MobileTitle = styled.h2`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 5%;
    left: 5%;
  }
`

export const CloseBtn = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 5%;
    right: 5%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex !important;
  float: right;

  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 5%;
  }
`

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 288px));
  place-content: center;
  max-width: 1000px;
  gap: 24px;
  margin-top: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(175px, 175px));
    max-width: 90vw;
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

export const DescWrapper = styled.span`
  display: block;
  text-align: left;
  margin: 12px 0 17px 0;
  font-size: 16px;
  height: 74px;
  width: 256px;
  line-height: 150%;
  color: #000;

  @media only screen and (max-width: 768px) {
    display: contents;
    width: 157px;
    font-size: 14px;
    white-space: initial;
    text-wrap: break;
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

export const MobileOptions = styled.div`
  margin-top: 29px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const FiltersBtn = styled.h3`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    text-transform: uppercase;
    color: #2264d1;
  }
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 24px;
  margin-top: 14px;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`
export const SelectWrapper = styled.div`
  width: 90px;
  @media only screen and (max-width: 768px) {
    width: 56px;
  }
`

export const IconWrapper = styled.img`
  width: 15px;
  height: 15px;
  transition: all 0.3s;
  margin-right: 10px;
`
