import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>More..</Text>
        </View>
    </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: '200',
        paddingHorizontal: 8,
    },
    container:{
        padding:8,
    },
    card:{
        width:100,
        height: 100,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:8,
        borderRadius:8,


    },
    cardElevated:{
        backgroundColor: '#CAD5F4',
        elevation:5,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"#EF5359",
        shadowOpacity: 0.9,
        shadowRadius:3
    }
})

{/* <ScrollView> vs <FlatList> -which one to use?
ScrollView renders all its react child components at once, but this has a performance downside.
Imagine you have a very long list of items you want to display, maybe several screens worth of content.
reatinø '3 romponents and native views for everything all at once, much of which may not even be
own, will contribute to slow rendering and increased memory usage. */}