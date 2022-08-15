import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-web';


/*import {Colors, DebugInstructions, Header,
  LearnMoreLinks,ReloadInstructions} from 'react-native/Libraries/NewAppScreen'*/

export default function App() {
  const [todos,setTodos] = React.useState([{id:1,task:'first todo',completed:true},
                                           {id:2,task:'second todo',completed:true}]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txt}>To-Do List</Text>
        <Icon name='delete' size={25} color="red" style={{marginBottom: "250vh"}}/>
      </View>
      <FlatList showsVerticalScrollIndicator={false} data={todos} /*renderItem={({item})=><ListItem todo={item}/>}*//>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
            <TextInput placeholder="Add Todo"/>
        </View>
        <TouchableOpacity>
          <View style={styles.inOpt}>
            <Icon name="add" color="red" size={40}/>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txt:{
    fontWeight:'bold',
    fontSize: 20,
    color:'#fff',
    marginBottom: '250vh',
    marginRight: '60vw',
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    color: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer:{
    backgroundColor: "#fff",
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  inOpt:{
    height: 50,
    width: 50,
    backgroundColor:"black",
    borderRadius:25,
    elevation: 40,
    justifyContent:'center',
    alignItems:'center',
  }

});
