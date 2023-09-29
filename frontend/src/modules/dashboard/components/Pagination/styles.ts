import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    margin-top: 0px;
  }
`

export const Button = styled.button`
  margin: 16px;
  cursor: pointer;
  min-width: 120px;
  border: 1px solid #0099cc;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 5px 6px 0 0 #b6e5e5;
  border: 3px solid #54c5c1;
  color: #00254d;
  background-color: ffffff;
  font-family: 'Poppins', sans-serif;
  position: relative;
  &:hover {
    top: 1px;
    box-shadow: 3px 4px 0 0 #b6e5e5;
  }
`
