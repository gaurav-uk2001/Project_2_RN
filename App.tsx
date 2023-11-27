// rnfe
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <View>
      <FlatCards/>
      <ElevatedCards/>
      </View>
    </SafeAreaView>
    
  )
}

export default App