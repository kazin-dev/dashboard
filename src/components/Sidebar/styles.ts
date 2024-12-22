import styled from 'styled-components'
import { colors } from '../../styles'

export const SidebarContainer = styled.aside`
  width: 281px;
  background-color: ${colors.Black};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  padding: 20px 10px;
  height: height: 100%;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.SoftSilver};
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    .menu-item {
      display: flex;
      align-items: center;
      padding: 28px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      height: 59px;

      &.active {
        font-weight: bold;
      }

      span {
        margin-right: 10px;
      }
    }
  }

  .help-settings {
    border-top: 1px solid ${colors.SoftSilver};
    padding-top: 10px;
    .settings {
      margin-bottom: 100%;
    }

    .help,
    .settings {
      display: flex;
      align-items: center;
      padding: 10px 29px;
      font-size: 1rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;

      span {
        margin-right: 10px;
      }
    }
  }
`
export const UserProfile = styled.div`
  display: flex;
  padding: 10px;

  img {
    margin-right: 10px;
  }
`

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${colors.SoftSilver};

  .user-profile {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .user-info {
      h4 {
        margin: 0;
        font-size: 1rem;
      }

      p {
        margin: 0;
        font-size: 0.8rem;
        color: #a9a9a9;
      }
    }
  }
`
