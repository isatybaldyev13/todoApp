import React ,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput} from 'react-native'
import {ListItem, Button,FormInput,Header} from 'react-native-elements'
class Todo extends Component{
    state={
        todos:[],
        visibilityFilter:'',
        typing:''
    }
    addTodo(){
        if(this.state.typing===''){
            alert('Enter to do')
        }else{
            this.setState((prevState)=>({
                typing:'',
                todos:prevState.todos.concat({
                    text:this.state.typing,
                    completed:false
                })
            })) 
        }
        
    }
    handleDelete(index){
        const temp = this.state.todos
        temp.splice(index,1)
        this.setState({
            todos:temp
        })
    }    
    render(){
        return(
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Todo App', style: { color: '#fff' } }}
                />
                <ScrollView style={styles.content}>
                    {
                     this.state.todos.map((todo,i)=>(
                        <ListItem
                            key={i}
                            title={todo.text}
                            rightIcon={{name:'close'}}
                            onPressRightIcon={()=>this.handleDelete(i)}
                        />
                        )
                    )
                    }
                </ScrollView>
               <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder='type something here'
                        value={this.state.typing}
                        onChangeText={(text)=>this.setState({typing:text})}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.addTodo()}>
                        <Text style={{textAlign:'center'}}>Add</Text>
                    </TouchableOpacity>
               </View>

            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center' 
    },
    content:{
        height:'75%'
    },
    footer:{
        flex:1,
        flexDirection:'row'
    },
    input:{
        paddingLeft:20,
        width:'70%',
    },
    button: {
        width:'30%',
        backgroundColor:'#00BCD4',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent:'center',
        alignContent:'center' 
      },
})
export default Todo