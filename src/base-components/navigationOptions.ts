import colors from "./colors";

const navigationOptions = (navTitle: string = "") => ({
    title: navTitle,
    headerTintColor: colors.navigationBar.tintColor,
    headerStyle: {
        backgroundColor: colors.navigationBar.backgroundColor,
        borderBottomWidth: 0,
    },
});

export default navigationOptions;
