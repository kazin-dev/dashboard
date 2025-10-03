import { styled } from 'styled-components'
import { colors } from '../../styles'

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
}

export const SecondContainer = styled.div`
  max-width: 1116px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.tablet} and max-width: ${breakpoints.laptop}) {
    width: 100%;
  }
`

export const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid ${colors.Silver};
    border-radius: 8px;
    width: 100%;
    max-width: 288px;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100%;
    }
  }

  input::placeholder {
    color: gray;
    font-size: 14px;
    padding-left: 30px;
  }

  img {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin: 20px 0;
    margin-left: 18px;
  }
`

export const NotificationIcon = styled.span`
  position: relative;
  border-radius: 50%;
  border: 1px solid ${colors.SoftSilver};
  width: 40px;
  height: 40px;
  cursor: pointer;

  img {
    padding: 8px 0 0 9.2px;
  }
`

export const NotificationsActive = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #5100d7;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 58.8%;
  height: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const PngVector = styled.img`
  margin-left: 10px;
`
