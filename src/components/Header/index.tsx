import Search from '../../Images/searchnormal1.png'
import Notification from '../../Images/notification.png'
import EclipseProfile from '../../Images/Ellipse 2.png'
import Vector from '../../Images/Vector (3).png'
import {
  Grid,
  NotificationIcon,
  PngVector,
  Profile,
  RightContent,
  SecondContainer,
  StyledInput
} from './styles'

const Header = () => {
  return (
    <SecondContainer>
      <Grid>
        <StyledInput>
          <img src={Search} alt="" />
          <input type="text" placeholder="Searh..." />
        </StyledInput>
        <RightContent>
          <NotificationIcon>
            <img src={Notification} alt="" />
          </NotificationIcon>
          <Profile>
            <img src={EclipseProfile} alt="" />
            <PngVector src={Vector} alt="" />
          </Profile>
        </RightContent>
      </Grid>
    </SecondContainer>
  )
}

export default Header
