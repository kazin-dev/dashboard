import Header from '../../components/Header'
import Welcome from '../../components/MainContent/WelcomeSection'
import Sidebar from '../../components/Sidebar'
import { Container, MainContent } from '../../styles'

const Dashboard = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          <Header />
          <Welcome />
        </MainContent>
      </Container>
    </>
  )
}

export default Dashboard
