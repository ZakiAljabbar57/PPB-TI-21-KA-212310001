import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderBar from '../widgets/HeaderBar'
import ExpScrollView from '../widgets/ExpScrollView'

export class Search extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} style={(Platform.OS === "ios") ? "light" : "dark"} />
                <HeaderBar />
                <View style={{ flex: 10 }} >
                    <ExpScrollView />
                </View>
            </SafeAreaView>
        )
    }
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? 'black' : 'white'
    }
})