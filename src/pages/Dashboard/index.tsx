import { useState } from 'react'
import Header from '../../components/Header'
import WalletSection from '../../components/MainContent/WalletSection.tsx'
import Welcome from '../../components/MainContent/WelcomeSection'
import Sidebar from '../../components/Sidebar'
import { Container, ContainerBackground, MainContent } from '../../styles'

const Dashboard = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          <Header />
          <ContainerBackground>
            <Welcome />
            <WalletSection isChecked={isChecked} onToggle={setIsChecked} />
          </ContainerBackground>
        </MainContent>
      </Container>
    </>
  )
}

export default Dashboard
