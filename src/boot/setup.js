// import * as Expo from "expo";
// import React, { Component } from "react";
// import { StyleSheet, View, StatusBar } from 'react-native'
// import TaskList from '../components/taskList';
// import { Provider } from 'react-redux';
// import configureStore from '../config/configureStore';
// import ReduxNavigation from '../navigation/ReduxNavigation';

// const store = configureStore()

// export default class Setup extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isReady: false
//     };
//   }
//   componentWillMount() {
//     this.loadFonts();
//   }
//   async loadFonts() {
//     await Expo.Font.loadAsync({
//       Verdana: require('../../assets/fonts/Verdana.ttf'),
//       RobotoRegular: require('../../assets/fonts/Roboto-Regular.ttf'),
//       RobotoLight: require('../../assets/fonts/Roboto-Light.ttf'),

//     });
//     this.setState({ isReady: true });
//   }
//   render() {
//     if (!this.state.isReady) {
//       return <Expo.AppLoading />;
//     }
//     return (
//         <Provider store={store}>
//           <View style={styles.container}>
//             <StatusBar barStyle='light-content' />
//             <ReduxNavigation />
//           </View>
//         </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
// })