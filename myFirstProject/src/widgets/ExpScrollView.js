import { ScrollView } from 'react-native'
import React from 'react'
import Users from '../data/ObjData'
import UserItem from './UserItem'

const ExpScrollView = () => {
    return (
        <ScrollView>
            {Users.map((v, index) => (
                <UserItem item={v} key={index} />
            ))}
        </ScrollView>
    )
}

export default ExpScrollView