// rnfe
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      </View>
    </SafeAreaView>
    
  )
}

export default App