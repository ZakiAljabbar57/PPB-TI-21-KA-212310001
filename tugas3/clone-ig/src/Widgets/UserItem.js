import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FeedsItem = ({ item }) => {
    return (
        <View style={stylesFeeds.container}>
            <View style={stylesFeeds.userContainer}>
                <View style={stylesFeeds.usernameContainer}>
                    <Image source={item.prof_pic} style={stylesFeeds.userAva} />
                    <View>
                        <Text style={stylesFeeds.username}>{item.username}</Text>
                    </View>
                </View>
                <View>
                    <FontAwesome5 name={'ellipsis-h'} color={'white'} size={20} />
                </View>
            </View>
            <View style={stylesFeeds.postContainer}>
                <Image source={item.pic_post} style={stylesFeeds.postImage} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginHorizontal: 5 }}>
                        <FontAwesome5 name={'heart'} color={'white'} size={25} />
                    </View>
                    <View style={{ marginHorizontal: 5 }}>
                        <FontAwesome5 name={'comment'} color={'white'} size={25} />
                    </View>
                    <View style={{ marginHorizontal: 5 }}>
                        <FontAwesome5 name={'paper-plane'} color={'white'} size={25} />
                    </View>
                </View>
                <View>
                    <FontAwesome5 name={'bookmark'} color={'white'} size={25} />
                </View>
            </View>
        </View >
    )
}

const StoriesItem = ({ item }) => {
    return (
        <View style={stylesStories.container}>
            <View style={stylesStories.storiesList}>
                {(item.gender) === "M" ? (
                    <Image source={require('../../assets/icons/icon-boy-1.png')} style={{ ...stylesStories.storyAva, borderWidth: ((item.is_view) ? 0 : 2) }} />
                ) : (
                    <Image source={require('../../assets/icons/icon-girl-1.png')} style={{ ...stylesStories.storyAva, borderWidth: ((item.is_view) ? 0 : 2) }} />
                )}


                <Text style={stylesStories.storyName}>{item.username}</Text>
            </View>
        </View>
    )
}

const SearchPage = ({ item }) => {
    return (
        <View style={stylesSearch.search_container}>
            <View style={stylesSearch.search_account}>
                <Image source={item.image} style={stylesSearch.search_ava} />
                <View>
                    <Text style={{ ...stylesSearch.search_name, fontWeight: 'bold' }}>
                        {item.name}
                    </Text>
                    <Text style={stylesSearch.search_name}>{item.fullname}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={stylesSearch.btn_follow} activeOpacity={0.6}>
                    <Text style={stylesSearch.search_name}>Follow</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const stylesSearch = StyleSheet.create({
    search_container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15
    },
    search_account: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    search_ava: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#f0f0f0',
        marginRight: 15
    },
    search_name: {
        fontSize: 16,
        color: 'white',
        textAlign: 'left'
    },
    btn_follow: {
        backgroundColor: "purple",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
    }
})

const stylesFeeds = StyleSheet.create({
    container: {
        flex: 8
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    userAva: {
        width: 40,
        height: 40,
        marginRight: 15,
        borderRadius: 100,
        backgroundColor: '#f0f8ff'
    },
    usernameContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    username: {
        color: 'white',
        fontSize: 16
    },
    postContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    postImage: {
        width: 400,
        height: 400
    },


})

const stylesStories = StyleSheet.create({
    container: {
        flex: 2
    },
    storiesList: {
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        alignItems: 'center'
    },
    storyAva: {
        width: 70,
        height: 70,
        borderColor: 'red',
        borderRadius: 100,
        backgroundColor: '#f0f8ff',
        marginHorizontal: 10
    },
    storyName: {
        color: 'white',
        fontSize: 14,
        marginVertical: 5
    }
})

export { FeedsItem, StoriesItem, SearchPage }