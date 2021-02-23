import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SearchBox } from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          text: '',
          chunks: [],
          phonicSounds: [],
        };
      }
  render() {
    return (
      <View style={styles.container}>
          <Header
          leftComponent={{icon: 'menu', color:"#fff"}}
          centerComponent={{text: 'Dictionary App', style:{color:"#fff"}}}
          rightComponent={{icon: 'home', color:"#fff"}}
          />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({
                text: text,
                isSearchPressed:false,
                word : "loading...",
                lexicalCategory : '',
                examples:[],
                defination:''
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity 
        style={styles.searchBox}
        onPress={()=>{
        this.setState({isSearchPressed:true});
        this.getWord(this.state.text)
        }}>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#b8b8b8',
      },
  searchBox: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
      },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
getWord=(word)=>{
   var searchKeyword=word.toLowerCase()
   var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"    
   console.log(url);     
   return fetch(url);
   .then((data)=>={
     if(data.status=200){
       return data.json()
     }
     else{
       return null
     }
   })
}
