import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../Widgets/Search/SearchBar'
import SearchList from '../Widgets/Search/SearchList'

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <View style={{ flex: 10 }}>
                <SearchList />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default Search