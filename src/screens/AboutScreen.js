import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {View, Text, StyleSheet} from 'react-native'

export const AboutScreen = () => {
    return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
      <Text>Я собака, ты <Text style={styles.собака}>собака</Text></Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({navigation}) =>  ({
  headerTitle: "О приложении",
  headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
      </HeaderButtons>
  )
});

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    собака: {
        fontFamily:'open-bold'
    }
});
