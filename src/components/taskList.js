import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, Platform } from 'react-native';
import EachTaskList from './EachTaskList';
import {taskListAPI} from '../services/taskListAPI';

const array = [ {title: 'A', data: [{key: 'Alexanwerder'}, {key: 'Alexaasnder'}], key: 'Ad'},
{title: 'A', data: [{key: 'Aleexandaer'}, {key: 'Alexander'}, {key: 'Aleasxander'}, {key: 'Aleasxerander'}], key: 'Add'},
{title: 'A', data: [{key: 'Alexafnder'}, {key: 'Alexaernder'}], key: 'Aasdf'},
{title: 'A', data: [{key: 'Alexadnder'}], key: 'A'},
{title: 'A', data: [{key: 'Aleexander'}, {key: 'Alexander'}, {key: 'Alexanasder'}], key: 'Aw'},
{title: 'A', data: [{key: 'Alexdanrder'}, {key: 'Alexaddnder'}], key: 'Ae'},
{title: 'A', data: [{key: 'Alexander'}, {key: 'Alexsanfasgder'}], key: 'Awe'},
{title: 'A', data: [{key: 'Awlexasnder'}, {key: 'Alexanssder'}], key: 'Aadsfd'},
{title: 'A', data: [{key: 'Alexasddnder'}, {key: 'Alexasnder'}], key: 'Avr'},
{title: 'A', data: [{key: 'Alexsddander'}, {key: 'Alexaander'}], key: 'Acv'},
{title: 'A', data: [{key: 'Alefgxander'}, {key: 'Alexafasdgnder'}], key: 'Asbd'},
];

export default class TaskList extends React.Component {

  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.renderSection = this.renderSection.bind(this);
  }

  onRowPress(item) {
    this.props.navigation.navigate('taskListDetails', {data: item});
    console.log(this)
  }

  renderItem({item}) {
    return(
      <EachTaskList data={item} action={()=>this.onRowPress(item)} />
    )
  }

  // Row separator line
  renderSeparator = () => {
    return(
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: '#ddd',
          marginLeft: "0%"
        }}
      />
    );
  }

  renderSection({section}){
    return(
      <View style={styles.center}>
        <View style={[styles.sectionHeader, styles.center]}>
          <Text style={styles.sectionText}>{section.title}</Text>
        </View>
      </View>
    );
  }

  render() {
    console.log("=======================")
    console.log(this.props)
    return (
      <View style={styles.container}>
        
          <SectionList 
            sections={this.props.data}
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSection}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item,index) => item.task+index}

          /> 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    backgroundColor: '#fcf3e1',
    height: 19,
    borderRadius: 3,
    paddingHorizontal: 3,
    marginTop: 16,
    marginBottom: 20 
  },
    sectionText: {
      fontFamily: 'RobotoLight',
      fontSize: 10,
      color: "#666666"
    }
});
