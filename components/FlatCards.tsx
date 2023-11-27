import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>

        {/* applying multile styles into one component */}
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: '200',
        paddingHorizontal: 8
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
    },
    card:{
        //allow use justify content and alignitems which is used to style inside the box
        // flex:0,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 100,
        height:100,
        borderRadius: 10,
        margin: 8
    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#0000FF',
    },
    cardThree:{
        backgroundColor: '#008000'

    }
})