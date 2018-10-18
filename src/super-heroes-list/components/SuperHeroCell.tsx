import { LinearGradient } from "expo";
import * as React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { Text } from "react-native";
import { SuperHero } from "../../core/model";

interface Props {
    superHero: SuperHero;
}

class SuperHeroCell extends React.Component<Props> {
    public render() {
        return (
            <ImageBackground style={styles.container} source={{ uri: this.props.superHero.picture }}>
                <Text style={styles.name}>{this.props.superHero.name}</Text>
                <LinearGradient style={styles.gradient} colors={["transparent", "#000"]} />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: "flex-end",
        zIndex: 0,
    },
    gradient: {
        height: 100,
        width: "100%",
        position: "absolute",
        zIndex: 2,
    },
    name: {
        fontSize: 20,
        margin: 16,
        color: "white",
        zIndex: 3,
    },
});
export default SuperHeroCell;
