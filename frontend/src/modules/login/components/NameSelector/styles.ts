
import styled from 'styled-components'
import { fadeIn } from '../../../common/styles'

export const EventBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  max-width: 70%;
  max-height: 80vh;
  max-width: 800px;
  padding: 60px 36px;
  margin-top: 210px;
  border: 3px solid #54c5c1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 8px 10px 0 0 #b6e5e5;
  color: #00254d;
  animation: ${fadeIn} 0.8s ease-in-out;
  @media (max-width: 800px) {
    width: 70%;
    height: 80vh;
  }
`

export const StyledSubmit = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  font-weight: bold;
  border: 3px solid #54c5c1;
  box-shadow: 3px 4px 0 0 #b6e5e5;
  border-radius: 8px;
  margin-top: 20px;
  width: 80%;
  color: #00254d;
  background-color: white;
  position: relative;
  &:hover {
    top: 1px;
    box-shadow: 1px 4px 0 0 #b6e5e5;
  }
`

export const InputBox = styled.div`
  color: 'hsl(0, 0%, 40%)';
  display: 'inline-block';
  fontSize: 12;
  fontStyle: 'italic';
  margin-top: 24px;
  max-width: 128px;
  margin-bottom: 4px;
`

export const P = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
`
