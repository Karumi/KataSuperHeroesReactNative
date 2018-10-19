import * as React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import EmptyCase from "../../base-components/empty-case/EmptyCase";
import Loading from "../../base-components/loading/Loading";
import navigationOptions from "../../base-components/navigationOptions";
import { SuperHero } from "../../core/model";
import { RootAction, RootState } from "../../store";
import { fetchSuperHeroes } from "../super-heroes-list-actions";
import SuperHeroesList from "./SuperHeroesList";

interface Props {
    readonly loading: boolean;
    readonly superHeroes: SuperHero[];
    readonly onMount: () => void;
}

class SuperHeroesListScreen extends React.Component<Props> {

    public static navigationOptions = navigationOptions("Kata Super Heroes");

    public componentWillMount() {
        this.props.onMount();
    }
    public render() {
        const { loading, superHeroes } = this.props;
        const thereAreSuperHeroes = !superHeroes.isEmpty;
        const shouldShowEmptyCase = !loading && !thereAreSuperHeroes;
        const shouldShowSuperHeroesList = !loading && thereAreSuperHeroes;
        return (
            <View
                style={styles.screen}>
                {loading && <Loading />}
                {shouldShowEmptyCase && <EmptyCase />}
                {shouldShowSuperHeroesList && <SuperHeroesList superHeroes={superHeroes} />}
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
    loading: state.superHeroesList.loading,
    superHeroes: state.superHeroesList.superHeroes,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
    onMount: fetchSuperHeroes,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperHeroesListScreen);
