import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'
class ListItem extends Component {
  render() {
    const {id, title } = this.props.library.item;
    //console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress = { () => this.props.selectLibrary(id)}>
      <View>
      <CardSection>
      <Text style={styles.titleStyles}>{this.props.library.item.title}</Text>
      </CardSection>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles= {
    titleStyles : {
        fontSize: 18,
        paddingLeft: 15
    }
}
 
export default connect(null,actions)(ListItem);