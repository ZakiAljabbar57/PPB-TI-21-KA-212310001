import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/icons/icon-ig-text.png")} />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 10 }}>
                    <FontAwesome5 name={'heart'} color='white' size={25} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <FontAwesome5 name={'paper-plane'} color='white' size={25} />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    }
})