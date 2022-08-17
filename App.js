import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-web';
import {ListItem} from 'react-native-web';



/*import {Colors, DebugInstructions, Header,
  LearnMoreLinks,ReloadInstructions} from 'react-native/Libraries/NewAppScreen'*/

export default function App() {
  const [textItem,setTextItem] = React.useState('')
  const [todos,setTodos] = React.useState([{id:1,task:'first todo',completed:true},
                                           {id:2,task:'second todo',completed:false}]);
  const ListItem = ({todo}) =>{
    return(
      <View style={styles.listItem}>
        <View style={{flex:1,}}>
          <Text style={{fontWeight: 'bold',fontSize:15,color:"black",textDecorationLine: todo?.completed ? 'line-through' : 'none',}}>{todo?.task}</Text>
        </View>
        {!todo?.completed &&(
          <TouchableOpacity style={[styles.actionIcon]}>
          <Icon name="done" size={20} color="#fff" onPress={()=>markTodoComplete(todo?.id)}/>
        </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.actionIcon,{backgroundColor: 'red'}]} onPress={()=>deleteTodo(todo?.id)}>
          <Icon name="delete" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
    );
  };

  const addTodo = () =>{
    if(textItem == ''){
      alert('Error','Please input todo')
    }else{
      const newTodo={
        id:Math.random(),
        task:textItem,
        completed: false,
      }
      setTodos([...todos,newTodo])
      setTextItem('');
    }
    
  }

  const markTodoComplete = (todoId) =>{
    const newTodos = todos.map((item)=>{
      if(item.id==todoId){
        return {...item,completed:true}
      }else{
        return item;
      }
    });
    setTodos(newTodos);
  }

  const deleteTodo = (todoId)=>{
    const newTodos = todos.filter(item=>item.id != todoId)
    setTodos(newTodos);
  }
  
  const clearTodos = () =>{
      setTodos([])
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txt}>To-Do List</Text>
        <Icon name='delete' size={25} color="red" style={{marginBottom: "250vh"}} onPress={clearTodos}/>
      </View>
      <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{padding:20,paddingBottom:100}} data={todos} renderItem={({item})=><ListItem todo={item}/>}/>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
            <TextInput placeholder="Add Todo"
            value={textItem} 
            onChangeText={(text)=>setTextItem(text)}/>
        </View>
        <TouchableOpacity onPress={addTodo}>
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
  },
  listItem:{
    width: "60vw",
    padding:20,
    backgroundColor: "#fff",
    flexDirection: 'row',
    elevation: 12,
    borderRadius:7,
    marginVertical: 10,
    
  },
  actionIcon:{
    height:25,
    width:25,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius:3,
  }

});
