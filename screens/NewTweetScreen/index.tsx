import React from 'react'
import {Container,PostTweetButton,TopElements,StyledText,MiddleContainer, InputArea, TweetInput, ImageInput } from  './styles'
import {AntDesign} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import ProfilePicture from '../../components/ProfilePicture'
const NewTweetScreen = () =>{
    const [tweet, setTweet] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')
    
    const onPostTweet = () => {
        console.log('Posting tweet: ', tweet)
        console.log('image url: ', imageUrl)
    }


    return(
        <Container>
            <TopElements>
                <AntDesign name="close" size={30} color={Colors.light.tint}/>
                <PostTweetButton onPress={onPostTweet}>
                    <StyledText>Tweet</StyledText>
                </PostTweetButton>
            </TopElements>
                <MiddleContainer>
                    <ProfilePicture image={'https://pbs.twimg.com/profile_images/1278506514119036929/SPYmN0ls_200x200.jpg'}/>
                   <InputArea>
                    <TweetInput
                        value={tweet}
                        numberOfLines={3}
                        multiline={true}
                        placeholder={'What\'s happening?'}
                        onChangeText={(input) =>  setTweet(input)}
                        
                    />
                    <ImageInput
                        value={imageUrl}
                        placeholder={'Image url (optional)'}
                        onChangeText={(input) =>  setImageUrl(input)}
                    />
                    </InputArea>
                </MiddleContainer>
        </Container>

    )
}

export default NewTweetScreen