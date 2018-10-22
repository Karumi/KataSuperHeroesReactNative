import * as React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SuperHero } from "../../core/model";

interface Props {
    readonly superHero: SuperHero;
    readonly onTap: (superHero: SuperHero) => void;
}

class SuperHeroCell extends React.Component<Props> {

    public render() {
        const superHero = this.props.superHero;
        return (
            <TouchableHighlight onPress={() => this.props.onTap(this.props.superHero)}>
                <View
                    style={styles.container}>
                    <Image
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            zIndex: 1,
                            resizeMode: "cover",
                        }}
                        source={{ uri: superHero.picture }}
                    />
                    <Text style={styles.name}>{this.props.superHero.name}</Text>
                    <LinearGradient style={styles.gradient} colors={["transparent", "#000"]} />
                </View>
            </TouchableHighlight>
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
