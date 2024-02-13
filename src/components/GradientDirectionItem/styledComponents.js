// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  background-color: #ffffff;
  opacity: ${props => (props.active ? 1 : 0.5)};
  font-weight: 700;
  color: #334155;
  font-family: 'Roboto';
  border: none;
  border-radius: 4px;
  font-size: 10px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px;
`
