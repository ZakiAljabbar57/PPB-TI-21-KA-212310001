import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import Header from '../Widgets/Header';
import Body from '../Widgets/Body';
import Feeds from '../Widgets/Feeds';

export class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} style={"light"} />
                <Header />
                <Body />
            </SafeAreaView>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
})