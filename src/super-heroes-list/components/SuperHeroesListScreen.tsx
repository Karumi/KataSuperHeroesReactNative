import * as React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
import EmptyCase from "../../base-components/empty-case/EmptyCase";
import Loading from "../../base-components/loading/Loading";
import navigationOptions from "../../base-components/navigationOptions";
import { SuperHero } from "../../core/model";
import { openSuperHeroDetailScreen } from "../../router";
import { RootState } from "../../store";
import { fetchSuperHeroes } from "../super-heroes-list-actions";
import SuperHeroesList from "./SuperHeroesList";

interface Props {
    readonly navigation: any;
    readonly loading: boolean;
    readonly superHeroes: SuperHero[];
    readonly onMount: () => void;
}

class SuperHeroesListScreen extends React.Component<Props> {

    public static navigationOptions = navigationOptions("");

    public componentWillMount() {
        this.props.onMount();
    }

    public render() {
        const navigate = this.props.navigation.navigate;
        const { loading, superHeroes } = this.props;
        const thereAreSuperHeroes = superHeroes.length !== 0;
        const shouldShowEmptyCase = !loading && !thereAreSuperHeroes;
        const shouldShowSuperHeroesList = !loading && thereAreSuperHeroes;
        return (
            <View
                style={styles.screen}>
                {shouldShowEmptyCase && <EmptyCase />}
                {shouldShowSuperHeroesList && <SuperHeroesList
                    onSuperHeroCellTap={(superHero) => openSuperHeroDetailScreen(navigate, superHero.name)}
                    superHeroes={superHeroes} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#22282F",
    },
});

const mapStateToProps = (state: RootState) => ({
    loading: state.superHeroesList.loading === true,
    superHeroes: state.superHeroesList.superHeroes,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    onMount: fetchSuperHeroes,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperHeroesListScreen);
