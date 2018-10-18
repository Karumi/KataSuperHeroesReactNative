import * as React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

class Loading extends React.Component {
    public render() {
        return <ActivityIndicator size="large" color="white" style={style.activityIndicator} />;
    }
}

const style = StyleSheet.create({
    activityIndicator: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Loading;
