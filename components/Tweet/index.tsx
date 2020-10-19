import React from 'react'

import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'

import { TweetType } from '../../types'
import {Container} from './styles'

export type TweetProps = {
  tweet: TweetType
}

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Container>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </Container>
  )
}

export default Tweet
