import styled from 'styled-components'
import { fadeIn } from '../../../common/styles'

export const GraphBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  border: 3px solid #54c5c1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 8px 10px 0 0 #b6e5e5;
  animation: ${fadeIn} 0.4s ease-in-out;
`
export const H1 = styled.h1`
  font-size: xx-large;
  color: #00254d;
  margin: 0px;
`

export const P = styled.p`
  margin: 0px;
  padding: 0px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #b6e5e5;
  padding: 40px 36px;
  margin: 0px;
  border-bottom: 3px solid #54c5c1;
`
