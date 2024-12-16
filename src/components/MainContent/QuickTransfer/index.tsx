import {
  Amount,
  BodyCard,
  Card,
  CardOrPhone,
  Cards,
  Create,
  TopBar,
  ArrowButton,
  CardItem
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

        <CardOrPhone></CardOrPhone>
        <Amount></Amount>
        <Create></Create>
      </BodyCard>
    </Card>
  )
}

export default QuickTransfer
