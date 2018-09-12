import React,{Component} from 'react'
import {View,StyleSheet,ScrollView,Text,TextInput,TouchableOpacity,Button} from 'react-native'
import {addList,deleteList,setFilter} from '../actions'
import { ListItem } from 'react-native-elements';
import {connect} from 'react-redux'

class Main extends Component{
    state={
        typing:''
    }
    handleAddNoteList(){
        if(this.state.typing!==''){
            this.props.addList(this.state.typing)
            this.setState({typing:''})
        }else{
            alert('Enter the list title !')
        }
    }
    handleOpenDetail(title,id){
        this.props.setFilter(id)
        this.props.navigation.navigate('List',{title})
    }
    render(){
        console.log(JSON.stringify(this.props));
        return(
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    {
                     this.props.lists.map((list,i)=>(
                        <ListItem
                            key={i}
                            title={list.title}
                            rightIcon={{name:"keyboard-arrow-right"}}
                            onPressRightIcon={()=>this.handleOpenDetail(list.title,list.id)}
                        />
                        )
                    )
                    }
                </ScrollView>
               <View style={styles.footer}>
                    <TextInput
                        value={this.state.typing}
                        style={styles.input}
                        placeholder='type something here'
                        onChangeText={(text)=>this.setState({typing:text})}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.handleAddNoteList()}>
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

const mapStateToProps = (state)=>({
    lists : state.lists,
    filter:state.filter
})
export default connect(mapStateToProps,{addList,deleteList,setFilter})(Main)