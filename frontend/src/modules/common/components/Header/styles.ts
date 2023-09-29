import styled from 'styled-components'
import {fadeIn} from '../../../common/styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #00264d;
  border-bottom: 2px solid #000;
  width: 100vw;
  padding: 20px 40px;
  box-sizing: border-box;
  position: fixed;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
    padding: 10px 20px;
  }
`

export const Title = styled.h1`
  text-decoration: none;
  color: white;
  margin: 8px;
`

export const Logout = styled.div`
  text-decoration: none;
  color: white;
  margin: 0.5em;
  animation: ${fadeIn} 0.8s ease-in-out;
`
