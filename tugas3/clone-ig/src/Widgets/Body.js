import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Stories from './Stories'
import Feeds from './Feeds'

const Body = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Stories />
                <Feeds />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10
    }
})

export default Body