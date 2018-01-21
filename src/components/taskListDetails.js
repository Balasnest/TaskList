import React from 'react';
import {View, Text} from 'react-native';

class TaskListDetails extends React.Component {
	render(){
		console.log(this)
		const { task, dueDate, createdBy, status, priority } = this.props.navigation.state.params.data;
		return(
			<View style={styles.container}>
				<View style={{backgroundColor: '#f1c40f', padding: 25, borderRadius: 5}}>
					<Text> Task: {task} </Text> 
					<Text> dueDate: {dueDate} </Text> 
					<Text> created by: {createdBy} </Text> 
					<Text> status: {status} </Text> 
					<Text> priority: {priority} </Text>
				</View> 
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
}

export default TaskListDetails;