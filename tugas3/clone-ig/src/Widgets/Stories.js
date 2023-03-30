import { FlatList } from 'react-native'
import React from 'react'
import { DummyStories } from '../Data/objDummy'
import { StoriesItem } from './UserItem'

const Stories = () => {
    return (
        <FlatList horizontal={true} data={DummyStories} renderItem={({ item }) => <StoriesItem item={item} />} />
    )
}

export default Stories