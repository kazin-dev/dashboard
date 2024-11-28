import { SecondContainer } from '../../Header/styles'
import {
  CardTotal,
  CardWallet,
  ContainerTotal,
  GridWallet,
  Switch,
  TitleTotal,
  Value
} from './styles'

import Card from '../../../Images/Card.png'

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
          <div>
            <h3>Wallet</h3>
            <p>
              Cards | <span>1 out of 4</span>
            </p>
          </div>
          <GridWallet>
            <div>
              <img src={Card} alt="" />
            </div>
            <div>
              <div>
                <p>Balance</p>
                <span>$14,528,00</span>
              </div>
              <div>
                <p>Currency</p>
                <span>US Dollar</span>
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
            </div>
          </GridWallet>
        </div>
      </CardWallet>
    </SecondContainer>
  )
}

export default WalletSection
