import { LinearGradient } from "expo";
import * as React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { Text } from "react-native";
import { SuperHero } from "../../core/model";
import images from "./images/images";

interface Props {
    superHero: SuperHero;
}

class SuperHeroCell extends React.Component<Props> {
    public render() {
        const superHero = this.props.superHero;
        return (
            <ImageBackground
                style={styles.container}
                source={{ uri: superHero.picture }}>
                <Text style={styles.name}>{this.props.superHero.name}</Text>
                <LinearGradient style={styles.gradient} colors={["transparent", "#000"]} />
                {superHero.isAvenger && <Image style={styles.badge} source={images.avengersBadge} />}
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
    badge: {
        alignSelf: "flex-end",
        width: 90,
        height: 101,
        margin: 16,
        zIndex: 3,
    },
});
export default SuperHeroCell;
