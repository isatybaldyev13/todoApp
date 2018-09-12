import React,{Component} from 'react'
import {ActivityIndicator,View,StyleSheet} from 'react-native'

class List extends Component{
    componentWillMount(){
        this.props.navigation.navigate('main')
    }
    render(){
        return(
            <View style={styles.container}>
                 <ActivityIndicator size="small" color="#00ff00" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default List