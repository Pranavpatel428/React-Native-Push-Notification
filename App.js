import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { client } from './src/graphql/Client'
//import { Headlines } from './src/graphql/Queries'

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>React Native Demo App</Text>
  </View>
)

function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})

export default App