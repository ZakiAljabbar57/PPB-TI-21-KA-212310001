import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Users } from '../../Data/objDummy'
import { SearchPage } from '../UserItem'

const SearchList = () => {
    return (
        <FlatList data={Users} renderItem={({ item }) => <SearchPage item={item} />} />
    )
}

export default SearchList