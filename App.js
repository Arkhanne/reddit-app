import React, { Component } from 'react';
import { ActivityIndicator, Text, Image, View, StyleSheet, FlatList  } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      alignContent:'center',
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'center',
  },
})

// Sacar a un fichero y hacer import
async function fetchData() {
  const result = await fetch('https://api.reddit.com/r/pics/new.json');
  const response = await result.json();
  return response;
}

// Sacar a un fichero
export default class PostsList extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    isLoading: true,
    dataSource: [],
  }
  // }

  async componentDidMount() {
    const responseJson = await fetchData();

    this.setState({
      dataSource: responseJson, 
      isLoading: false
    });
  }

  handleClick = (art) => {
    this.setState({selected: art.id})
  }

  render() {
    const {isLoading, dataSource} = this.state;

    if (isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    
// Componentizar el artículo para que pueda tener un handleClick
// class Art extends Component {
//   handleClick = () => {
//     this.props.onClick(
//       this.props.art
//     )
//   }

//   render() {
//     const {art} = this.props;
//     return (...)
//   }
// }






    return (
      <View style={styles.container}>
        <FlatList
          data = {dataSource.data.children}
          renderItem = {
            ({item}) => 
              /* <Art 
                key=''
                onClick = {this.handleClick}
                selected = {this.selected === art.id}
                art={art}
              /> */
              <View>
                <Text>TITLE: {item.data.title}</Text>
                <Image source={{uri: item.data.thumbnail}} style={{width: 193, height: 110}}/>
                <Text>AUTHOR: {item.data.author}</Text>
                <Text>SCORE: {item.data.score}</Text>
                <Text>COMMENTS: {item.data.num_comments}</Text>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
          }
          keyExtractor = {(item, index) => index}
        />
      </View>
    );
  }
}
