import React ,{Component} from 'react'
import {View,StyleSheet,Text,TextInput,Button} from 'react-native'
import {connect} from 'react-redux'
import {counterDecrement,counterIncrement,counterClear,counterSet} from './actions'
class Counter extends Component{ 
    render(){
        console.log(JSON.stringify(this.props));
        return(
            <View style={styles.container}>
                <TextInput
                    value={this.props.count.toString()}
                    placeholder='type here'
                    onChangeText={this.props.counterSet}
                 />
                <Button
                    title="+"
                    onPress={this.props.counterIncrement}
                 />
                <Text>
                {this.props.count}
                </Text>
                <Button
                    title="-"
                    onPress={this.props.counterDecrement}
                 />
                 <Button
                    title="clear"
                    onPress={this.props.counterClear}
                 />
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
const mapStateToProps = (state)=>({
    count:state
})
export default connect(mapStateToProps,{counterIncrement,counterDecrement,counterClear,counterSet})(Counter)