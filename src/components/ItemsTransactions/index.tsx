import Netflix from '../../Images/Picture.png'
import Spotify from '../../Images/Picture-1.png'
import Figma from '../../Images/Picture-2.png'
import Shopify from '../../Images/Picture-3.png'
import { TransactionImage } from './styles'

import {
  BodyModelTransactions,
  Date,
  ModelTransactions,
  Name,
  Value
} from './styles'

const transactions = [
  {
    name: 'Netflix',
    date: 'Apr 05 2023 at 21:46',
    value: '-$15.49',
    img: Netflix
  },
  {
    name: 'Spotify',
    date: 'Apr 05 2023 at 21:46',
    value: '+$135.49',
    img: Spotify
  },
  { name: 'Figma', date: 'Apr 05 2023 at 21:46', value: '-$75.00', img: Figma },
  {
    name: 'Shopify',
    date: 'Apr 05 2023 at 21:46',
    value: '-$75.00',
    img: Shopify
  }
]

const ItemTransactions = (): JSX.Element => {
  return (
    <>
      {transactions.map((transaction, index) => (
        <ModelTransactions key={index}>
          <TransactionImage src={transaction.img} alt={transaction.name} />
          <BodyModelTransactions>
            <div>
              <Name>{transaction.name}</Name>
              <Date>{transaction.date}</Date>
            </div>
            <Value $isPositive={transaction.value.startsWith('+')}>
              {transaction.value}
            </Value>
          </BodyModelTransactions>
        </ModelTransactions>
      ))}
    </>
  )
}

export default ItemTransactions
