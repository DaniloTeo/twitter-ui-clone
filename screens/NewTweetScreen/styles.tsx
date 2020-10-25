import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: flex-start;
    background-color: white;
`

export const TopElements = styled.View`
    width: 100%;    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-top: 20px;
`

export const PostTweetButton = styled.TouchableOpacity`
    background-color: ${Colors.light.tint}
    border-radius: 30px
`

export const StyledText = styled.Text`
    padding-horizontal: 20px;
    padding-vertical: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
`

export const MiddleContainer = styled.View`
    flex-direction:row;
    padding: 15px;

`

export const InputArea = styled.View`
    margin-left:10px;
`
export const TweetInput = styled.TextInput`
    height: 100px;
    max-height: 300px;
    font-size:20px
`
export const ImageInput = styled.TextInput``