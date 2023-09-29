import styled from 'styled-components'

export const EventBlock = styled.div`
  display: flex;
  height: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  border: 3px solid #54c5c1;
  border-radius: 8px;
  box-shadow: 8px 10px 0 0 #b6e5e5;
  color: #00254d;
  cursor: pointer;
  transition: ease 0.3s;
  position: relative;
  top:0;
  &:hover {
    top: -2px;
    box-shadow: 10px 12px 0 0 #b6e5e5;
  }
  @media (max-width: 800px) {
    margin-top: 16px;
  }
`

export const UL = styled.ul`
  padding-left: 0px;
  display: flex;
`

export const ItemGroup = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.div`
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 2px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  border: 2px dotted #f09600;
  border-radius: 8px;
  font-size: small;
  display: inline-block;
  word-wrap: break-word;
  height: 1rem;
  @media (max-width: 800px) {
    font-size: x-small;
  }
`

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  font-size: x-large;
  padding:0px;
  margin:0px;
  padding: 24px 24px;
  background: #b6e5e5;
  color: #00254d;
  font-weight: bold;
  @media (max-width: 800px) {
    position: absolute;
    padding: 0px 8px;
    font-size: large;
    color: #54c5c1;
    background: #ffffff;
    display: flex;
    top: -34px;
    left: -2px;
    border: 3px solid #54c5c1;
    background: #b6e5e5;
    color: #00254d;
    font-weight: bold;
    border-radius: 8px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 36px;
`

export const P = styled.p`
  margin-bottom: 0px;
`
