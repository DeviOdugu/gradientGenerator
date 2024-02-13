import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Container,
  Heading,
  Direction,
  Lists,
  Pick,
  ColorInput1,
  ColorInput2,
  Button,
  ColorDiv,
  Text1,
  Text2,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeValue: gradientDirectionsList[0].value,
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
  }

  activeButton = value => {
    this.setState({activeValue: value})
  }

  onChangeColor1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  onClickGenerateButton = () => {
    const {activeValue, colorInput1, colorInput2} = this.state
    this.setState({
      activeDirection: activeValue,
      color1: colorInput1,
      color2: colorInput2,
    })
  }

  render() {
    const {
      activeValue,
      colorInput1,
      colorInput2,
      color1,
      color2,
      activeDirection,
    } = this.state

    return (
      <Container
        data-testid="gradientGenerator"
        direction={activeDirection}
        color1={color1}
        color2={color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Direction>Choose Direction</Direction>
        <Lists>
          {gradientDirectionsList.map(eachValue => (
            <GradientDirectionItem
              key={eachValue.directionId}
              gradientDetails={eachValue}
              isActive={eachValue.value === activeValue}
              activeButton={this.activeButton}
            />
          ))}
        </Lists>
        <Pick>Pick the Colors</Pick>
        <ColorDiv>
          <div>
            <Text1 htmlFor="color1">{color1}</Text1>
            <ColorInput1
              type="color"
              id="color1"
              value={colorInput1}
              onChange={this.onChangeColor1}
            />
          </div>
          <div>
            <Text2 htmlFor="color2">{color2}</Text2>
            <ColorInput2
              type="color"
              id="color2"
              value={colorInput2}
              onChange={this.onChangeColor2}
            />
          </div>
        </ColorDiv>
        <Button type="button" onClick={this.onClickGenerateButton}>
          Generate
        </Button>
      </Container>
    )
  }
}

export default GradientGenerator
