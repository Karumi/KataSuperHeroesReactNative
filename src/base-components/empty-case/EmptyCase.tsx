import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

class EmptyCase extends React.Component {
    public render() {
        return (
            <View style={style.container}>
                <Text style={style.text} >¯\_(ツ)_/¯</Text>;
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
    },
});

export default EmptyCase;
