import React, {Component} from 'react';
import {Main,List,Loading} from './screens';
import { StackNavigator,SwitchNavigator } from 'react-navigation'

const MainStack = StackNavigator({
    Main:{
        screen:Main,
        navigationOptions: ({ navigation }) => ({
            title:'Notes',
          }),
    },
    List :{
        screen:List,
        navigationOptions: ({ navigation }) => ({
            title:navigation.state.params.title,
          }),
    },
})
const MainNavigator = SwitchNavigator({
    loading:Loading,
    main:MainStack
})

export default class AppRouter extends Component {
    render() {
      return (
          <MainNavigator  />
      );
    }
}