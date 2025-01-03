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
  StyledInput,
  NotificationsActive
} from './styles'

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Header component that displays a search input, notification icon, and user profile section.
 *
 * The component is structured with a grid layout inside a SecondContainer.
 * - Includes a search input field with an accompanying search icon.
 * - Displays a notification icon with an active status indicator.
 * - Shows a user profile section with profile image and a vector overlay.
 */

/******  7904e4c8-b1fb-499b-8461-dfbb26abe236  *******/
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
            <img src={Notification} alt="Ícone de Notificação" />
            <NotificationsActive />
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
