import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import {
	listVendors, addVendor, updateVendor, deleteVendor, editVendor,
} from '../reducers/vendors';


class Vendor extends Component {

  deleteItem (item ) {
    console.log('delete', item)
    this.props.deleteVendor(item.key);
  }
  editItem (item) {
    console.log('edit', item)
    this.props.editVendor(item.key, item.name);
    this.props.navigation.navigate('VendorForm')
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Button
        onPress={() => {
          this.editItem(item)
        }}
        title="Edit"
        color="#0000FF"
        accessibilityLabel="Edit"
      />
      <Button
        onPress={() => {
          this.deleteItem(item)
        }}
        title="Delete"
        color="#FF0000"
        accessibilityLabel="Delete"
      />
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
    vendors: state.vendors.vendors,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    listVendors: () => {
      dispatch(listVendors());
    },
    addVendor: (name) => {
      dispatch(addVendor(text));
    },
    updateVendor: (id, name) => {
      dispatch(addVendor(id, name));
    },
    editVendor: (id, name) => {
      dispatch(editVendor(id, name));
    },
    deleteVendor: (id) => {
      dispatch(deleteVendor(id));
    },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Vendor);