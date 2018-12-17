import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { listVendors } from '../reducers/vendors';


class Vendor extends Component {

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    const { vendors } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={vendors}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  return {
    vendors: state.vendors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listVendors: () => {
      dispatch(listVendors());
    },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Vendor);