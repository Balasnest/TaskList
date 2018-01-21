import React from 'react';
import {Animated, Easing} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeTabView from '../components/homeTabView';
import TaskList from '../components/taskList';
import TaskListDetails from '../components/taskListDetails';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step
  }
})

const PrimaryNav = StackNavigator({
	homeTabView: {
		screen: HomeTabView,
		navigationOptions: ({ props }) => ({
			title: "TaskList",
			
		})
	},
	taskList: {
		screen: TaskList,
		navigationOptions: ({ props }) => ({
			title: "TaskList",
			header: null
		})
	},
	taskListDetails: {
		screen: TaskListDetails,
		navigationOptions: ({ props }) => ({
			title: "Task List Details",
			
		})
	}
},{
	headerMode: 'screen',
	initialRouteName: 'homeTabView',
	transitionConfig: noTransitionConfig,
	navigationOptions: {
	  headerStyle: {backgroundColor: "#2980b9", height: 60},
	  title: 'TaskList',
	}
});

export default PrimaryNav;