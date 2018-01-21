import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import * as actions from '../actions';

import TaskList from './taskList';
import {taskListAPI} from '../services/taskListAPI';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class HomeTabView extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      index: 0,
      routes: [
        { key: 'All', title: 'All' },
        { key: 'OverDue', title: 'OverDue' },
        { key: 'Closed', title: 'Closed' },
        { key: 'New', title: 'New' },
        { key: 'Open', title: 'Open' },
      ],
    };
  }

  filterData = (status) => {
    var newArray = this.props.data.filter(function (el) {
      el.taskList = el.data.filter(function(item)
      {
        return item.status == status;
      });
      return el;
    });
    console.log(newArray);
    return newArray;
  }
  
  componentDidMount(){
    const navigation = this.props.navigation;
    this.props.taskListService({navigation});
  }

  taskComponent(key){
    const navigation = this.props.navigation;
    let data = this.filterData(key);
    if(data.length > 0){
      return <TaskList data={data} navigation={navigation} /> 
    }
    else{
      return <Text> No Task </Text>
    }
  }



  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} scrollEnabled = {true} />;

  _renderScene = SceneMap({
    All: () => this.taskComponent('open'),
    OverDue: () => this.taskComponent('open'),
    Closed: () => this.taskComponent('open'),
    New: () => this.taskComponent('open'),
    Open: () => this.taskComponent('open')
  });

  render() {
    console.log(this.props);
    return (
        <View style={styles.container}>
          {this.props.loading ? <View style={styles.center}><Text> Loading TaskList... </Text></View>
            :
            <TabViewAnimated
              
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
            />
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapstateToProps = ({home}) => {
  const { data, error, loading } = home;
  return { data, error, loading };
}

export default connect(mapstateToProps,actions)(HomeTabView);