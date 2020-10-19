import React from 'react'
import { TweetType } from '../../../types'
import {Container, IconContainer, Number} from './styles'
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons'

export type FooterProps = {
  tweet: TweetType
}

const Footer = ({ tweet }: FooterProps) => {
  return (
    <Container>
      <IconContainer>
        <Feather name={'message-circle'} size={20} color={'grey'} />
        <Number>{tweet.numberOfComments}</Number>
      </IconContainer>
      <IconContainer>
        <EvilIcons name={'retweet'} size={28} color={'grey'} />
        <Number>{tweet.numberOfRetweets}</Number>
      </IconContainer>

      <IconContainer>
        <AntDesign name={'hearto'} size={20} color={'grey'} />
        <Number>{tweet.numberOfLikes}</Number>
      </IconContainer>

      <IconContainer>
        <EvilIcons name={'share-google'} size={28} color={'grey'} />
      </IconContainer>
    </Container>
  )
}

export default Footer
