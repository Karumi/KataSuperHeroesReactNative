import * as React from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import appStore from "./store";
import SuperHeroesDetailScreen from "./super-hero-detail/components/SuperHeroDetailScreen";
import SuperHeroesListScreen from "./super-heroes-list/components/SuperHeroesListScreen";

const AppNavigationStack = createStackNavigator({
    SuperHeroListScreen: {
        screen: SuperHeroesListScreen,
    },
    SuperHeroDetailScreen: {
        screen: SuperHeroesDetailScreen,
    },
});

class App extends React.Component {
    public render() {
        return (
            <Provider store={appStore}>
                <AppNavigationStack />
            </Provider>
        );
    }
}

export default App;
