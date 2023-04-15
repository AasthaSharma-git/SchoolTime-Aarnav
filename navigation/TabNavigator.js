import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import DrawerNavigator from './DrawerNavigator';
import TestScreen from '../screens/TestScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator({ navigation }) {



    return (
        <Tab.Navigator

            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: ({ focused, navigation }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "CreatePost") {
                        iconName = focused ? "add-circle" : "add-circle-outline";
                    }
                    else if (route.name === "TestScreen") {
                        iconName = focused ? "grid" : "grid-outline";

                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={25}
                            color='#6d6b6e'
                            style={styles.icons}

                        />
                    );
                }
            })}
        >

            <Tab.Screen name="TestScreen" component={TestScreen} listeners={({ navigation }) => ({
                tabPress: e => {
                    e.preventDefault();
                    navigation.openDrawer();
                }
            })} />
            <Tab.Screen name="Feed" component={Feed} options={{ unmountOnBlur: true }} />
            <Tab.Screen name="CreatePost" component={CreatePost} options={{ unmountOnBlur: true }} />

        </Tab.Navigator>


    );

}
const PayScreenComponent = ({ navigation }) => {
    <TabNavigator />
}



const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#190f1f",
        height: "8%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: "hidden",
        position: "absolute",
        alignSelf: 'center'
    },

    icons: {
        width: 25,
        height: 25,

    }
});