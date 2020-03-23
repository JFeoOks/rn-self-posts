import React from 'react'
import {StyleSheet, View} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {Post} from "./Post";

export const PostList = ({data, onOpen}) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
});
