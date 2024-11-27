import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #1f1f2e;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  height: 100vh;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

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
  ul {
    list-style: none;
    padding: 0;

    .menu-item {
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #2c2c3a;
      }

      &.active {
        background-color: #2c2c3a;
        font-weight: bold;
      }

      span {
        margin-right: 10px;
      }
    }
  }
`

export const SidebarFooter = styled.div`
  .help,
  .settings,
  .user-profile {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .user-profile {
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
