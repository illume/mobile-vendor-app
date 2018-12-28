import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, TextInput, Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { withFormik } from 'formik';

import {
	listVendors, addVendor, updateVendor, deleteVendor, editVendor
} from '../reducers/vendors';



class VendorForm extends Component {

  handleSubmit(values, { props, setSubmitting }) {
    // Alert.alert(JSON.stringify(values, null, 2));
    if (this.props.id) {
	    this.props.updateVendor(this.props.id, values.name);
    } else {
	    this.props.addVendor(values.name);
    }
    // console.log(values)
    setSubmitting(false)
    this.props.navigation.navigate('VendorList')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Formik
            initialValues={{ name: this.props.name, id: this.props.key }}
            onSubmit={this.handleSubmit.bind(this)}>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput
                onChangeText={handleChange('name')}
                value={values.name}
                label="Name"
                placeholder="Name"
              />
              <Button
              	title="Submit"
              	onPress={handleSubmit}
              	style={styles.button}>
              </Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  }
});


const mapStateToProps = state => {
  if (!state.vendors.editVendor) return {}
  return {
    name: state.vendors.editVendor.name,
    id: state.vendors.editVendor.key,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listVendors: () => {
      dispatch(listVendors());
    },
    addVendor: (name) => {
      dispatch(addVendor(name));
    },
    updateVendor: (id, name) => {
      dispatch(updateVendor(id, name));
    },
    editVendor: (id, name) => {
      dispatch(editVendor(id, name));
    },
    deleteVendor: (id) => {
      dispatch(deleteVendor(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorForm);