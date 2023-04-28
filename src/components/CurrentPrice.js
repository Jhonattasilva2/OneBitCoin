import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$54423.365</Text>
      <Text style={styles.textPrice}>Ultima Cotação</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerPrice: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        marginBottom: 20
        
    },

    currentPrice: {
        color: "#f50d41",
        fontSize: 32,
        fontWeight: "bold",
        paddingTop: 20
    },

    textPrice: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    }
})