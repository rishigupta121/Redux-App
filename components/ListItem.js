import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
class ListItem extends Component {
  renderDescription() {
    const{ library, expanded} = this.props;
    if(expanded ) {
      return(<Text>{library.description}</Text>);
    }
  }
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

const mapStateToProps = (state, ownProps) => {
  // const expanded= state.selectedLibraryId ===  ownProps.library.item.id;
  // return {expanded}
  //return { selectedLibraryId: state.selectedLibraryId}
};

export default connect(mapStateToProps, actions)(ListItem);