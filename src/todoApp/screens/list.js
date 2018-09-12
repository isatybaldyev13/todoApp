import React,{Component} from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,TextInput} from 'react-native'
import {addNote,deleteNote} from '../actions'
import {connect} from 'react-redux'
import { Button,ListItem } from 'react-native-elements';
class List extends Component{
    state={
        typing:''
    }
    handleAddNote(){
        if(this.state.typing!==''){
            this.props.addNote(this.state.typing,this.props.filter)
            this.setState({typing:''})
        }else{
            alert('Enter the note')
        }
    }
    render(){ 
        return(
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                {
                     this.props.notes.map((note,i)=>{
                        if(note.listId === this.props.filter){
                            return (
                                <ListItem
                                    key={i}
                                    title={note.text}
                                    rightIcon={{name:"close"}}
                                    onPressRightIcon={()=>this.props.deleteNote(note.id)}
                                />
                                )
                        }
                     })
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
                        onPress={()=>this.handleAddNote()}>
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
    notes:state.notes,
    filter:state.filter
})
export default connect(mapStateToProps,{addNote,deleteNote})(List)