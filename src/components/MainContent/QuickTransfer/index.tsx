import CardIcon from '../../../Images/fluent_payment-32-regular.png'
import DollarCircle from '../../../Images/dollarcircle.png'
import Porcent from '../../../Images/porc.png'
import Arrow from '../../../Images/solar_arrow-right-linear.png'

import {
  BodyCard,
  Card,
  Cards,
  Create,
  TopBar,
  ArrowButton,
  CardItem,
  Input,
  CardArea,
  StartArea,
  ButtonStarted
} from './styled'
import React, { useRef } from 'react'

const QuickTransfer = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 250 // Distância da rolagem
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount
      } else {
        scrollRef.current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <Card>
      <TopBar>
        <h3>Quick Transfer</h3>
        <a href="#">See all</a>
      </TopBar>
      <BodyCard>
        {/* Botões de Seta */}
        <ArrowButton className="left" onClick={() => scroll('left')}>
          {'<'}
        </ArrowButton>
        <ArrowButton className="right" onClick={() => scroll('right')}>
          {'>'}
        </ArrowButton>

        {/* Container Rolável */}
        <Cards ref={scrollRef}>
          <CardItem>Card 1</CardItem>
          <CardItem>Card 2</CardItem>
          <CardItem>Card 3</CardItem>
          <CardItem>Card 4</CardItem>
          <CardItem>Card 5</CardItem>
        </Cards>

        <CardArea>
          <img src={CardIcon} alt="" />
          <Input type="text" placeholder="Card or phone" />
        </CardArea>
        <CardArea>
          <img src={DollarCircle} alt="" />
          <Input type="text" placeholder="Amount" />
          <p>USD</p>
        </CardArea>
        <StartArea>
          <img src={Porcent} alt="" />
          <ButtonStarted>
            Get Started <img src={Arrow} alt="" />
          </ButtonStarted>
        </StartArea>
        <Create>
          <h4>Create a new deposit!</h4>
          <p>
            Choose a flexible deposit for your savings suited to your needs in
            InvestBank,
          </p>
        </Create>
      </BodyCard>
    </Card>
  )
}

export default QuickTransfer
