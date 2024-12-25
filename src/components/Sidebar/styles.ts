import styled from 'styled-components'
import { colors } from '../../styles'

export const SidebarContainer = styled.aside`
  width: 281px;
  background-color: ${colors.Black};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  height: 100%;

  @media (max-width: 768px) {
    width: 70px; /* Reduz a largura do sidebar */
    padding: 10px 5px;
  }
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

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;

    h1 {
      display: none; /* Esconde o texto do logo */
    }
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
      padding: 20px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      height: 59px;

      span {
        margin-right: 10px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .help-settings {
    border-top: 1px solid ${colors.SoftSilver};
    padding-top: 10px;

    .help,
    .settings {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;

      span {
        margin-right: 10px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    ul .menu-item {
      justify-content: center;
      padding: 15px;
      font-size: 0.8rem;

      span {
        margin-right: 0;
      }

      img {
        margin: 0;
      }
    }

    .help-settings .help,
    .help-settings .settings {
      justify-content: center;
      padding: 10px;

      span {
        margin-right: 0;
      }
    }
  }
`

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .user-info {
      h4 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
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

  @media (max-width: 768px) {
    .user-profile {
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        margin-right: 0;
        margin-bottom: 10px;
      }

      .user-info {
        h4 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.7rem;
        }
      }
    }
  }
`
