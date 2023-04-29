import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function QuotationItems() {
  return (
  <View style={styles.mainContent}>
    <View style={styles.contextLeft}>
      <View style={styles.boxLogo}>
        <Image style={styles.logoBitcoin} source={require("../img/bitcoin.png")}/>
        <Text style={styles.dayCotation}>28/04/2023</Text>
      </View>
    </View>
    <View style={styles.contextRight}>
      <Text style={styles.price}>$ 53331.064</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    width: "95%",
    height: "auto",
    backgroundColor: "#000000",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  contextLeft: {
    width: "36%",
    height: "100%",
    alignItems: "flex-start",
  },

  contextRight: {
    width: "60%",
    alignItems: "flex-end"
  },

  logoBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginRight: 3,
  },

  dayCotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: "#FFFFFF",
    fontWeight: "bold"
  },

  price: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },

  boxLogo: {
    flexDirection: "row",
    alignItems: "center"
  }
})