import Netflix from '../../Images/Picture.png'
import Spotify from '../../Images/Picture-1.png'
import Figma from '../../Images/Picture-2.png'
import Shopify from '../../Images/Picture-3.png'

import {
  BodyModelTransactions,
  Date,
  ModelTransactions,
  Name,
  Value
} from './styles'

const ItemTransactions = () => {
  return (
    <>
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
      <ModelTransactions>
        <img src={Spotify} alt="" />
        <BodyModelTransactions>
          <div>
            <Name>Spotify</Name>
            <Date>Apr 05 2023 at 21:46</Date>
          </div>
          <Value>+$135.49</Value>
        </BodyModelTransactions>
      </ModelTransactions>
      <ModelTransactions>
        <img src={Figma} alt="" />
        <BodyModelTransactions>
          <div>
            <Name>Figma</Name>
            <Date>Apr 05 2023 at 21:46</Date>
          </div>
          <div>
            <Value>-$75.00</Value>
          </div>
        </BodyModelTransactions>
      </ModelTransactions>
      <ModelTransactions>
        <img src={Shopify} alt="" />
        <BodyModelTransactions>
          <div>
            <Name>Shopify</Name>
            <Date>Apr 05 2023 at 21:46</Date>
          </div>
          <div>
            <Value>-$75.00</Value>
          </div>
        </BodyModelTransactions>
      </ModelTransactions>
    </>
  )
}

export default ItemTransactions
