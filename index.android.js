/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StarRating from 'react-native-rating-star';
//
export default class Apprater extends Component {

  constructor(props){
      super(props);

      this.state = {
        rating: '1'
      };

      this._valueChanged = this._valueChanged.bind(this);
  }

  _valueChanged(rating) {
    this.setState({rating});
     console.log(rating);
   }

   showExpression = (value) => {
     switch(value){
       case 2: return 'Not Bad...';
       break;
       case 3: return 'Good...';
       break;
       case 4: return 'Excellent...';
       break;
       case 5: return 'Loved it...';
       break;
     }
   }

  render() {
    return (

      <View style = {{ flex: 1, backgroundColor: '#34495E', paddingTop: 150}}>
      <Text style = {{ alignSelf: 'center', fontSize: 24, marginBottom: 10, color: '#E4F1FE'}}> Rate My App </Text>
        <StarRating
           maxStars={5}
           rating={1}
           selectStar={require('./select_star.png')}
           unSelectStar={require('./unselect_star.png')}
           valueChanged={this._valueChanged}
         />
      <Text style = {{ alignSelf: 'center', fontSize: 20, marginTop: 15, color: '#E4F1FE' }}> { this.state.rating } Star </Text>
      <Text style = {{ alignSelf: 'center', fontSize: 20, marginTop: 15, color: '#E4F1FE' }}> { this.showExpression(this.state.rating) } </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Apprater', () => Apprater);
