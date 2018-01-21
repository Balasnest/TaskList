import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform} from 'react-native';

export const {width, height} = Dimensions.get('window');

const colorCode = {
	'Work' : '#c0392b',
	'Personal': '#1abc9c',
	'Office': '#f1c40f'
};

class EachTaskList extends Component{

	//, , 

	render(){
		const {container, subContainer, row, heading, subHeading} = styles;
		const { data, action } = this.props;
		const category = data.category;
		const color = colorCode[category];

		return(
			<TouchableOpacity onPress={action} style={container}>
				<View style={{ position: 'absolute', height: 62, width: 4, 
					backgroundColor: color , marginLeft: "0%"}}
				/>
				<View style={subContainer}>
					<View style={row}>
						<Text style={heading}> {data.task} </Text>
						<Text style={{fontSize: 11, fontFamily: 'RobotoRegular', color: '#394ce5'}}> {data.status} </Text>
					</View>
					<Text style={subHeading}> Due Date: {data.dueDate} | {data.createdBy} | {data.category} </Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: width,
		height: 62
	},
	subContainer: {
		marginLeft: 26,
		marginRight: 28,
		marginVertical:16,
		backgroundColor: 'transparent'
	},
	row: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 3,
	},
	heading: {
		fontFamily: 'RobotoRegular',
		fontSize: 14,
		color: '#3e3e3e'
	},
	subHeading: {
		fontFamily: 'RobotoLight',
		fontSize: 11,
		color: '#cfa0a0'
	}
});

export default EachTaskList;