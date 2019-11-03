import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,Button } from 'react-native';
import Constants from 'expo-constants';
import AddItem from './addItem'
import FindItem from './findItem'
import Paginate from '../paginate'
import Item from './item'

export default class ItemsList extends React.Component {

  constructor(){
    super();
    this.state ={
      items: [],
      totalPages:0,
      itemsPerPage:1,
      page:1,
      addMode:false,
      findMode:false
    };

    this.getItems = this.getItems.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleFind = this.handleFind.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
}
componentDidMount(){
  this.getItems(1);
}


getItems(page = 1){
  fetch('http://10.0.2.2:3000/api/1/items?page=' + page)
  .then(res => res.json())
  .then(items => {
    this.setState({items : items.items ,totalPages:items.totalPages,page:page,itemsPerPage:items.itemsPerPage })
  })
}



// ADD item
handleAddItem(name,price,img){

  let data = {
    img: {
      uri: img.uri,
      type:'image/' + img.type,
      name: name,
    }};

  let options = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    method: 'POST'
  };
  
  options.body = new FormData();
  for (let key in data) {
    options.body.append(key, data[key]);
  }
  options.body.append('name',name);
  options.body.append('price',price);
  

  fetch('http://10.0.2.2:3000/api/1/items', options)
  .then(res => res.json())
  .then(res => {
      this.getItems(1);
      this.setState({addMode:false})})
  .catch(function(error) {
        console.log("fetch error:" ,error);
    });
  
    
}

// delete item
handleDelete(id){
    fetch('http://10.0.2.2:3000/api/1/items/' + id, {
      method: 'DELETE'
      })
      .then(res => this.getItems(1))
  }

// find item by name
handleFind(name){
    fetch('http://10.0.2.2:3000/api/1/items/' + name)
    .then(res => res.json())
    .then(items => {
        this.setState({findMode:false,items:items})
    })
}

// edit item
handleEditItem(id,name,price){
    fetch('http://10.0.2.2:3000/api/1/items/' + id, {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: name,
        price: price,
    }),
    }).then(res => {
        this.getItems(1)
    })  
}

//<AddItem addFunc={this.handleAddItem}/>
//
  render(){
   //console.log(this.state.items);
    return(
      <SafeAreaView style={styles.container}>
        <Button title="add new item" onPress={()=>this.setState({addMode:true})}/>
        <Button title="search item" onPress={()=>this.setState({findMode:true})}/>
        <AddItem visible={this.state.addMode} addFunc={this.handleAddItem}/>
        <FindItem visible={this.state.findMode} findFunc={this.handleFind}/>
        <FlatList
            data={this.state.items}
            renderItem={({ item }) => 
            <Item id={item._id} name={item.name} price={item.price} 
                    img = {item.img}
                    delFunc={this.handleDelete} 
                    editFunc={this.handleEditItem}/>}
            keyExtractor={item => item._id.toString()}
        />
      <Paginate totalPages={this.state.totalPages} func={this.getItems} itemsPerPage={this.state.itemsPerPage}/>

     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    borderColor: '#f9c2ff'
  },
});
