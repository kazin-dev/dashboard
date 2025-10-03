import styled from 'styled-components'
import { colors } from '../../styles'

interface MobileMenuProps {
  isOpen: boolean
}

export const SidebarContainer = styled.aside`
  max-width: 258px;
  width: 100%;
  background-color: ${colors.Black};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 22px 10px 0;

  /* Ajuste para telas menores que 768px */
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 10px;
    max-width: none; /* Remove a limitação de largura */
  }

  /* Ajuste para telas menores que 480px */
  @media (max-width: 480px) {
    display: block;
    padding: 10px 5px;
  }

  /* Ajuste para telas maiores que 1200px */
  @media (min-width: 1200px) {
    max-width: 300px; /* Permite maior largura em telas grandes */
    padding: 30px 25px 15px;
  }
`

export const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;

  span {
    background-color: ${colors.Silver};
    height: 3px;
    width: 100%;
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobileMenu = styled.div<MobileMenuProps>`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background-color: ${colors.Black};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.SoftSilver};
  width: 258px;

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
    width: 100vw;
    height: 100%;
    background-color: ${colors.Black} !important;
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
    display: flex;
    flex-direction: column;

    .menu-item {
      display: flex;
      align-items: center;
      padding: 20px 20px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      height: 59px;
      color: ${colors.Silver};

      span {
        margin-right: 20px;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    .menu-item.active {
      color: #fff; /* Texto branco */
      background-color: rgba(
        255,
        255,
        255,
        0.1
      ); /* Fundo sutil para destaque */
    }
  }

  .help-settings {
    width: 258px;
    padding-top: 10px;
    margin-bottom: 310px;
    color: ${colors.Silver};
    font-size: 0.8rem;
    cursor: pointer;

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
        display: flex;
        flex-direction: column;
        padding: 10px 6px;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
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
        margin: 8px;
      }
    }

    .help-settings .help,
    .help-settings .settings {
      margin-left: 150px;
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
  padding: 20px 0 25px 0;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  width: 258px;

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
      display: none;
      width: 258px;
    }
  }
`
