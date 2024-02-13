// Write your code here
import {List, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, activeButton, isActive} = props
  const {value, displayText} = gradientDetails

  const onClickButton = () => {
    activeButton(value)
  }

  return (
    <List>
      <Button type="button" onClick={onClickButton} active={isActive}>
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
