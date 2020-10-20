import React from 'react'
import tweets from '../../data/tweets'
import {FlatList} from 'react-native'
import Tweet from '../Tweet'
import {FeedContainer} from './styles'

const Feed = () => {
    return (
        <FeedContainer>
        <FlatList
            data={tweets}
            renderItem={({item}) => <Tweet tweet={item}/>}
            keyExtractor={(item) => item.id}
        />
        </FeedContainer>

    )
}

export default Feed