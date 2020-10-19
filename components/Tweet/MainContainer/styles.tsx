import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-horizontal: 10px;
`
export const TweetHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const TweetHeaderNames = styled.View`
  flex-direction: row;
`
export const Name = styled.Text`
  margin-right: 5px;
  font-weight: bold
`
export const Username = styled.Text`
  margin-right: 5px;
  color: grey
`
export const CreatedAt = styled.Text`
  margin-right: 5px;
  color: grey;
`
export const Content = styled.Text`
  margin-right: 5px;
  line-height: 18px;
`
export const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin-vertical: 10px;
  resize-mode: cover;
  border-radius: 15px;
`
