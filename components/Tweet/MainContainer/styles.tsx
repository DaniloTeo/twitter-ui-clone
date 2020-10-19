import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 10 },
  tweetHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tweetHeaderNames: {
    flexDirection: 'row'
  },
  username: {
    marginRight: 5,
    color: 'grey'
  },
  name: {
    marginRight: 5,
    fontWeight: 'bold'
  },
  createdAt: {
    marginRight: 5,
    color: 'grey'
  },
  content: {
    marginTop: 5,
    lineHeight: 18
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    resizeMode: 'cover',
    borderRadius: 15
  }
})

export default styles
