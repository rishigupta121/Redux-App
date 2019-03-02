import React, {
  Component
} from 'react';
import {
  FlatList
} from 'react-native';
import {
  connect
} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
   
  renderItem(library) {
    //console.log("hell");
    //console.log(library);
    return <ListItem key={library.item.title} library = {
      library
    }
    />
  }
  render() {
    //console.log(this.props.libraries);
    return ( <
      FlatList key={this.props.libraries.title} data = {
        this.props.libraries
      }
      renderItem = {
        this.renderItem
      }
      keyExtractor = {
        library => library.id
      }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
  // console.log(state);
};

// connect is function return a function we immediately call library list
export default connect(mapStateToProps)(LibraryList);
