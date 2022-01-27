import NodeView from "../Views/NodeView";
import ServerView from "../Views/Sub-NodeView/ServerView";
import TabNavigator from "./TabNavigator"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = createStackNavigator(
    {
        Node: NodeView,
        Server: ServerView
    },
    {
        mode: "modal"
    }
);

export default createAppContainer(AppNavigator);