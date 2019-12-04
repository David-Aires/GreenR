import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import Map from 'Map';


const { width } = Dimensions.get('screen');

class Home extends React.Component {



  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    //return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch ('https://green-r.be/api/stats.php?box=1&table=AIR_STAT')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  renderActu = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
        
       
        <Card item={articles[1]} full />
        <Card item={articles[2]} full /> 

        </Block>
      </ScrollView>
    )
  }



  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <Block flex center style={styles.home}>
        {this.renderActu()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
