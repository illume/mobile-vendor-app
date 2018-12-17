import React, { Component } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from '../reducers/repos';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('illume');
  }
  deleteItem (item ) {
    console.log('delete', item)
  }
  editItem (item) {
    console.log('edit', item)
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
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
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
  },
  edit: {

  },
  delete: {

  },
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.repos.map(repo => ({ key: `${repo.id}`, name: repo.name }));
  return {
    repos: storedRepositories
  };
};


const mapDispatchToProps = dispatch => {
  return {
    listRepos: (user) => {
      dispatch(listRepos(user));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);