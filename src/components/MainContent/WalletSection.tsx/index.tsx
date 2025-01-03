/* eslint-disable prettier/prettier */
import { SecondContainer } from '../../Header/styles'
import {
  ButtonClickPassLeft,
  ButtonClickPassRight,
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
import Left from '../../../Images/Left.png'
import Right from '../../../Images/Right.png'
import ArrowUp from '../../../Images/Arrow 1.png'
import ArrowDown from '../../../Images/Arrow 1 (1).png'

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
                from last week <span style={{ color: '#3DD26A' }}><img src={ArrowUp} />7.85%</span>
              </TitleTotal>
            </span>
          </CardTotal>
          <CardTotal>
            <TitleTotal>Total Expence</TitleTotal>
            <Value>
              <b>$425,30</b>
            </Value>
            <span>
              <TitleTotal>
                from last week <span style={{ color: '#3DD26A' }}><img src={ArrowUp} />22.30%</span>
              </TitleTotal>
            </span>
          </CardTotal>
          <CardTotal>
            <TitleTotal>Total Savings</TitleTotal>
            <Value>
              <b>$549,61</b>
            </Value>
            <span>
              <TitleTotal>
                from last week <span style={{ color: '#3DD26A' }}><img src={ArrowUp} />9.50%</span>
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
              <span>
                <ButtonClickPassLeft>
                  <img src={Left} alt="" />
                </ButtonClickPassLeft>
                <ButtonClickPassRight>
                  <img src={Right} alt="" />
                </ButtonClickPassRight>
              </span>
            </div>
          </GridHeaderWallet>
          <GridWallet>
            <img src={Card} alt="Card" />

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
