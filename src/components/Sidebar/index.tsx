import React from 'react'
import { Logo, Menu, SidebarContainer, SidebarFooter } from './styles'

const Sidebar = () => (
  <SidebarContainer className="sidebar">
    <Logo className="logo">
      <img src="/path/to/logo.png" alt="InvestBank Logo" />
      <h1>InvestBank</h1>
    </Logo>
    <Menu className="menu">
      <ul>
        <li className="menu-item active">
          <span>🏠</span> Dashboard
        </li>
        <li className="menu-item">
          <span>📊</span> Analytics
        </li>
        <li className="menu-item">
          <span>💳</span> Payments
        </li>
        <li className="menu-item">
          <span>📥</span> Deposit
        </li>
        <li className="menu-item">
          <span>💼</span> Moneybox
        </li>
        <li className="menu-item">
          <span>📈</span> Securities
        </li>
      </ul>
    </Menu>
    <SidebarFooter className="sidebar-footer">
      <div className="help">
        <span>❓</span> Help
      </div>
      <div className="settings">
        <span>⚙️</span> Settings
      </div>
      <div className="user-profile">
        <img src="/path/to/user-avatar.jpg" alt="User Avatar" />
        <div className="user-info">
          <h4>Anna Karin</h4>
          <p>annakarin@gmail.com</p>
        </div>
      </div>
    </SidebarFooter>
  </SidebarContainer>
)

export default Sidebar
