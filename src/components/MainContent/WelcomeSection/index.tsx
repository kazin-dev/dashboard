import { SecondContainer } from '../../Header/styles'
import { Button, Grid } from './styles'

const Welcome = () => {
  return (
    <SecondContainer>
      <Grid>
        <div>
          <h1>Hello, Anna!</h1>
          <div>
            <p>Send and receive funds with pleasure.</p>
          </div>
        </div>
        <div>
          <Button>Add Payment +</Button>
          <span>...</span>
        </div>
      </Grid>
    </SecondContainer>
  )
}

export default Welcome
