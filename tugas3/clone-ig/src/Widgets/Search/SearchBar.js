import { View, Text, StyleSheet, TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React from 'react'

const SearchBar = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
            <View style={styles.search_bar}>
                <FontAwesome5 name={'search'} size={25} color="grey" />
                <TextInput
                    style={styles.text_input}
                    placeholder='Search'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search_bar: {
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        backgroundColor: "#f0f0f0"
    },
    icons: {
        marginRight: 20
    },
    text_input: {
        fontSize: 18,
        width: "90%",
        color: "white",
        marginLeft: 10
    }
})

export default SearchBar