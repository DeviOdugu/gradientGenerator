// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`
export const Heading = styled.h1`
  color: #ededed;
  font-size: 20px;
`
export const Direction = styled.p`
  color: #ffffff79;
  font-size: 15px;
`
export const Pick = styled.p`
  color: #ffffff79;
  font-size: 15px;
`
export const ColorDiv = styled.div`
  display: flex;
`
export const Text1 = styled.p`
  color: #ffffff79;
  font-size: 10px;
  padding-left: 4px;
`
export const ColorInput1 = styled.input`
  border: none;
  outline: none;
  padding: 0px;
  background-color: transparent;
  margin-right: 20px;
`
export const Text2 = styled.p`
  color: #ffffff79;
  font-size: 10px;
  padding-left: 4px;
`
export const ColorInput2 = styled.input`
  border: none;
  outline: none;
  padding: 0px;
  background-color: transparent;
`
export const Button = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  border-radius: 4px;
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 8px;
  font-weight: 700;
  margin-top: 10px;
`
export const Lists = styled.ul`
  margin: 10px;
  display: flex;
`
