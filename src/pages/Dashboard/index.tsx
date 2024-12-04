import { useState } from 'react'
import Header from '../../components/Header'
import WalletSection from '../../components/MainContent/WalletSection.tsx'
import Welcome from '../../components/MainContent/WelcomeSection'
import Sidebar from '../../components/Sidebar'
import { Container, GridPage, MainContent } from '../../styles'

const Dashboard = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          <Header />
          <GridPage>
            <div>
              <Welcome />
              <WalletSection isChecked={isChecked} onToggle={setIsChecked} />
            </div>
          </GridPage>
        </MainContent>
      </Container>
    </>
  )
}

export default Dashboard
