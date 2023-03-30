import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Users from '../../assets/dummyData/data'

const ExpFlatList = () => {
    return (
        <FlatList data={Users} renderItem={({ item })} />
    )
}

export default ExpFlatList