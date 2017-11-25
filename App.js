import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ListView } from 'react-native';
import store from './store.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    let dataSource = ds.cloneWithRows([])
    this.state = {
      text: '',
      dataSource: dataSource
    };
  }

  _onPressButton() {
    let text = this.state.text
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    let filterdStore = store.filter((s) => {
      return s.description.toLowerCase().indexOf(text.toLowerCase()) != '-1'
    })

    let dataSource = ds.cloneWithRows(filterdStore)
    this.setState({
      text: text,
      dataSource: dataSource
    })
  }

  render() {
    let listView = <Text></Text>
    
    if (this.state.dataSource.getRowCount() > 0) {
      
      listView = <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.listitem}>{rowData.description}</Text>}
      />
    }

    return (
      <View style={styles.container}>
        <Button
            onPress={this._onPressButton.bind(this)}
            title="Search"
          />
        <TextInput
          style={styles.searchbar}
          placeholder="Search..."
          onChangeText={(text) => this.setState({text})}
        />
        
        {listView}
          

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#efefef',
    height: '100%'
  },
  searchbar: {
    height: 40,
    marginBottom: 30,
  },
  listitem: {
    marginBottom: 15,
    backgroundColor: '#fff', 
    padding: 15,
  }
});
