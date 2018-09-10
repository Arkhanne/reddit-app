import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between', 
    marginBottom: 10,
  },
  postData: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  image: {
    width: 80, 
    height: 80,
  },
  title: {
    fontWeight: 'bold',
    color: 'blue',
  },
  ratings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 2,
  },
  textLink: {
    color: 'blue',
  },
});