import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content:center;
`

export const TopElements = styled.View`
    flex-direction: row;
`

export const PostTweetButton = styled.TouchableOpacity`
    background-color: ${Colors.light.tint}
`

export const StyledText = styled.Text``