import ItemTransactions from '../../ItemsTransactions'
import { CardTransactions, TopBar, TopBarText } from './styled'

const Transiction = () => {
  return (
    <CardTransactions>
      <TopBar>
        <TopBarText>
          <h3>Transictions</h3>
          <p>|</p>
          <p>Upcoming Bills</p>
        </TopBarText>
        <div>
          <a href="#">view all</a>
        </div>
      </TopBar>
      <div>
        <ul>
          <li>
            <ItemTransactions />
          </li>
        </ul>
      </div>
    </CardTransactions>
  )
}

export default Transiction
