import ItemTransactions from '../../ItemsTransactions'
import { CardTransactions, TopBar } from './styled'

const Transiction = () => {
  return (
    <CardTransactions>
      <TopBar>
        <div>
          <h3>Transictions</h3>
        </div>
        <div>
          <a href="#">view</a>
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
