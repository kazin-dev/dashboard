// Sidebar.tsx
import React, { useState } from 'react'
import {
  Logo,
  Menu,
  SidebarContainer,
  SidebarFooter,
  UserProfile,
  HamburgerButton,
  MobileMenu
} from './styles'
import Symbol from '../../Images/Symbol.png'
import Analitycs from '../../Images/Analitycs.png'
import DashboardIcon from '../../Images/Dashboard Icon.png'
import Payment from '../../Images/fluent_payment-32-regular.png'
import Deposit from '../../Images/carbon_percentage.png'
import BoxMoney from '../../Images/ph_piggy-bank.png'
import Securities from '../../Images/arcticons_eufy-security.png'
import Help from '../../Images/Vector-1.png'
import Settings from '../../Images/setting2.png'
import Profile from '../../Images/Ellipse 2.png'

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <SidebarContainer>
      <Logo className="logo">
        <img src={Symbol} alt="InvestBank Logo" />
        <h1>InvestBank</h1>
      </Logo>

      <HamburgerButton onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
      </HamburgerButton>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <Menu className="menu">
          <ul>
            <li className="menu-item active">
              <span>
                <img src={DashboardIcon} alt="" />
              </span>{' '}
              Dashboard
            </li>
            <li className="menu-item">
              <span>
                <img src={Analitycs} alt="" />
              </span>{' '}
              Analytics
            </li>
            <li className="menu-item">
              <span>
                <img src={Payment} alt="" />
              </span>{' '}
              Payments
            </li>
            <li className="menu-item">
              <span>
                <img src={Deposit} alt="" />
              </span>{' '}
              Deposit
            </li>
            <li className="menu-item">
              <span>
                <img src={BoxMoney} alt="" />
              </span>{' '}
              Moneybox
            </li>
            <li className="menu-item">
              <span>
                <img src={Securities} alt="" />
              </span>{' '}
              Securities
            </li>
          </ul>
          <div className="help-settings">
            <div className="help">
              <span>
                <img src={Help} alt="" />
              </span>{' '}
              Help
            </div>
            <div className="settings">
              <span>
                <img src={Settings} alt="" />
              </span>{' '}
              Settings
            </div>
          </div>
        </Menu>
      </MobileMenu>

      <SidebarFooter className="sidebar-footer">
        <UserProfile>
          <img src={Profile} alt="User Avatar" />
          <div className="user-info">
            <h4>Anna Karin</h4>
            <p>annakarin@gmail.com</p>
          </div>
        </UserProfile>
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
