import React from 'react'
import {Container,PostTweetButton,TopElements,StyledText } from  './styles'
import {AntDesign} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
const NewTweetScreen = () =>{
    return(
        <Container>
            <TopElements>
                <AntDesign name="close" size={30} color={Colors.light.tint}/>
                <PostTweetButton>
                    <StyledText>Tweet</StyledText>
                </PostTweetButton>
            </TopElements>
        </Container>

    )
}

export default NewTweetScreen