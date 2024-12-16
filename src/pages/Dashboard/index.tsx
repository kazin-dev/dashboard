import { useState } from 'react'
import Header from '../../components/Header'
import WalletSection from '../../components/MainContent/WalletSection.tsx'
import Welcome from '../../components/MainContent/WelcomeSection'
import Sidebar from '../../components/Sidebar'
import { Container, GridPage, MainContent } from '../../styles'
import Transiction from '../../components/MainContent/Transactions'
import { SecondContainer } from '../../components/Header/styles'

const Dashboard = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          <Header />
          <Welcome />
          <SecondContainer>
            <GridPage>
              <div>
                <WalletSection isChecked={isChecked} onToggle={setIsChecked} />
              </div>
              <div>
                <Transiction />
              </div>
            </GridPage>
          </SecondContainer>
        </MainContent>
      </Container>
    </>
  )
}

export default Dashboard
