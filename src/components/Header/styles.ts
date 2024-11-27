import { styled } from 'styled-components'
import { colors } from '../../styles'

export const SecondContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

export const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 10px 10px 10px 30px;
    border: 1px solid ${colors.Silver};
    border-radius: 8px;
    width: 100%;
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
`

export const NotificationIcon = styled.span`
  border-radius: 50%;
  border: 1px solid ${colors.Silver};
  width: 40px;
  height: 40px;

  img {
    padding: 8px 0 0 8px;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50%;
`
export const PngVector = styled.img`
  margin-left: 10px;
`
