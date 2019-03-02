import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'
class ListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <CardSection>
      <Text style={styles.titleStyles}>{this.props.library.item.title}</Text>
      </CardSection>
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