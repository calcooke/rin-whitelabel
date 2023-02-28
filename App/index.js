import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

import MainStyles from 'MainStyles';
import HomeScreenWrapper from 'HomeScreenWrapper';

const styles = MainStyles;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <HomeScreenWrapper />
        </SafeAreaView>
      </View>
    );
  }
}
