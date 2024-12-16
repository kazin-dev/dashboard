/* eslint-disable prettier/prettier */
import { SecondContainer } from '../../Header/styles'
import {
  CardInfo,
  CardTotal,
  CardWallet,
  ContainerTotal,
  GridHeaderWallet,
  GridWallet,
  SpanLine,
  Switch,
  TitleTotal,
  Value
} from './styles'

import Card from '../../../Images/Card.png'
import StatisticsChart from '../Statistcs'

type ToggleSwitchProps = {
  isChecked: boolean
  onToggle: (checked: boolean) => void
}

const WalletSection: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onToggle
}) => {
  return (
    <SecondContainer>
      <div>
        <ContainerTotal>
          <CardTotal>
            <TitleTotal>Total Income</TitleTotal>
            <Value>
              <b>$974,99</b>
            </Value>
            <span>
              <TitleTotal>
                from last week <span>7.85%</span>
              </TitleTotal>
            </span>
          </CardTotal>
          <CardTotal>
            <TitleTotal>Total Expence</TitleTotal>
            <Value>$425,30</Value>
            <span>
              <TitleTotal>
                from last week <span>7.85%</span>
              </TitleTotal>
            </span>
          </CardTotal>
          <CardTotal>
            <TitleTotal>Total Savings</TitleTotal>
            <span>$549,61</span>
            <span>
              <TitleTotal>
                from last week <span>7.85%</span>
              </TitleTotal>
            </span>
          </CardTotal>
        </ContainerTotal>
      </div>
      <CardWallet>
        <div>
          <GridHeaderWallet>
            <div>
              <h3>Wallet</h3>
              <TitleTotal>Cards | 1 out of 4</TitleTotal>
            </div>
            <div>
              <span>back - next</span>
            </div>
          </GridHeaderWallet>
          <GridWallet>
            <img src={Card} alt="" />

            <SpanLine />

            <CardInfo>
              <div>
                <p>Balance</p>
                <span>
                  <b>$14,528,00</b>
                </span>
              </div>
              <div>
                <p>Currency</p>
                <span>
                  <b>US Dollar</b>
                </span>
              </div>
              <div>
                <p>Deactivate card</p>
                <Switch>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => onToggle(e.target.checked)}
                  />
                  <span className="slider"></span>
                </Switch>
              </div>
            </CardInfo>
          </GridWallet>
        </div>
      </CardWallet>
      <StatisticsChart />
    </SecondContainer>
  )
}

export default WalletSection
