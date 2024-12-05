import Netflix from '../../Images/Picture.png'
import {
  BodyModelTransactions,
  Date,
  ModelTransactions,
  Name,
  Value
} from './styles'

const ItemTransactions = () => {
  return (
    <ModelTransactions>
      <img src={Netflix} alt="" />
      <BodyModelTransactions>
        <div>
          <Name>Netflix</Name>
          <Date>Apr 05 2023 at 21:46</Date>
        </div>
        <Value>-$15.49</Value>
      </BodyModelTransactions>
    </ModelTransactions>
  )
}

export default ItemTransactions
