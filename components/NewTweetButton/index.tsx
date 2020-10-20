import React from 'react'
import {StyledTouchable} from './styles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const NewTweetButton = () => {
    const navigation = useNavigation()

    return(
        <StyledTouchable onPress={() => {navigation.navigate('NewTweet')}} activeOpacity={0.8}>
            <MaterialCommunityIcons size={30} name={'feather'} color={'white'}/>
        </StyledTouchable>

    )
}

export default NewTweetButton