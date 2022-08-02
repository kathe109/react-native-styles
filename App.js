import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, {backgroundColor: 'blue'
      } ,{color: 'white'}, {flex: 1}]}>Hello world!</Text>
      <Text style={[styles.welcome, {backgroundColor: 'white'
      }, {flex: 1}]}>Hello world!</Text>
      <Text style={[styles.welcome, {backgroundColor: 'red'
      }, {flex: 3}]}>Hello world!</Text>
      <Text style={[styles.welcome, {backgroundColor: 'white'
      }, {flex: 1}]}>Hello world!</Text>
      <Text style={[styles.welcome, {backgroundColor: 'blue'
      }, {color: 'white'}, {flex: 1}]}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
  }
});
