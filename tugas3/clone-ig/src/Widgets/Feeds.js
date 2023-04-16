import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { DummyFeeds } from '../Data/objDummy'
import { FeedsItem } from './UserItem'

const Feeds = () => {
    return (
        // <View style={styles.container}>
        //     {/* <ScrollView>
        //         <Stories />
        //     </ScrollView> */}
        // </View>
        <View>
            {DummyFeeds.map((v, index) => (
                <FeedsItem item={v} key={index} />
            ))}
        </View>
    )
}

export default Feeds

// const styles = StyleSheet.create({
//     container: {
//         flex: 10
//     }
// })