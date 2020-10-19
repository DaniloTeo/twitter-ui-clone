import React from 'react'
import { TweetType } from '../../../types'
import {Container, TweetHeaderContainer, TweetHeaderNames, Name, Username, CreatedAt, Content, Image} from './styles'
import { Entypo } from '@expo/vector-icons'
import {View} from 'react-native'

import Footer from '../Footer'

export type MainContainerProps = {
  tweet: TweetType
}

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <Container>
      <TweetHeaderContainer>
        <TweetHeaderNames>
          <Name>{tweet.user.name}</Name>
          <Username >@{tweet.user.username}</Username>
          <CreatedAt >15s</CreatedAt>
        </TweetHeaderNames>
        <Entypo name={'chevron-down'} size={16} color={'grey'} />
      </TweetHeaderContainer>

      <View>
        <Content>{tweet.content}</Content>
        <Image source={{ uri: tweet.image }} />
      </View>
      <Footer tweet={tweet} />
    </Container>
  )
}

export default MainContainer
