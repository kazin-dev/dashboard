import styled from 'styled-components'
import { colors } from '../../../styles'

export const Card = styled.div`
  width: 415px;
  height: auto;
  background-color: ${colors.White};
  margin-top: 14px;
  list-style: none;
  border-radius: 12px;
  position: relative;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) and (max-width: 1288px) {
    max-width: auto;
    width: 608px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 767px) {
    max-width: 87%;
    height: 430px;
  }
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
  }

  a {
    color: ${colors.Silver};
    font-size: 12px;
  }
`

export const Cards = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: 16px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CardItem = styled.div`
  flex: 0 0 auto;
  width: 227px;
  height: 72px;
  background-color: ${colors.LightGray};
  border-radius: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  color: ${colors};

  img:first-child {
    position: relative;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 4px;

    p:first-child {
      color: ${colors.Silver};
      font-size: 10px;
      line-height: auto;
      font-weight: 400;
      margin: 0 0 10px 8px;
    }

    p {
      color: ${colors.Black};
      font-size: 10px;
      line-height: auto;
      margin-left: 8px;
    }
  }
`
export const FavoriteCard = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`

export const ArrowButton = styled.button`
  position: absolute;
  top: 23.4%;
  transform: translateY(-50%);
  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.Silver};

  font-size: 12px;

  &.left {
    left: 8px;
  }

  &.right {
    right: 8px;
  }

  &:hover {
    color: ${colors.Red}; /* Efeito hover opcional */
  }
`

export const BodyCard = styled.div`
  padding: 6px;
`

export const Create = styled.div`
  margin-top: 8px;

  h4 {
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    color: ${colors.Silver};
    margin-bottom: 8px;
  }
`

export const CardArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 12px 0px;
  border-bottom: 2px solid ${colors.LightGray};

  img {
    height: 20px;
    width: 20px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
`
export const StartArea = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
  padding: 0 0 14px 0px;
  gap: 59%;
`
export const ButtonStarted = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px 8px 16px;
  background-color: ${colors.Black};
  color: ${colors.White};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  img {
    height: 16px;
    width: auto;
    vertical-align: middle;
  }
`
