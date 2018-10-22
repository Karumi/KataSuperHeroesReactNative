import { fromNullable, Option } from "fp-ts/lib/Option";
import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";
import EmptyCase from "../../base-components/empty-case/EmptyCase";
import Loading from "../../base-components/loading/Loading";
import navigationOptions from "../../base-components/navigationOptions";
import { SuperHero } from "../../core/model";
import { RootState } from "../../store";
import SuperHeroCell from "../../super-heroes-list/components/SuperHeroCell";
import { clearSuperHero, fetchSuperHeroById } from "../super-hero-detail-actions";

interface NavigationParams {
    title: string;
}

interface Props {
    readonly navigation: any;
    readonly onMount: (superHeroId: string) => void;
    readonly onUnmount: () => void;
    readonly loading: boolean;
    readonly superHero: Option<SuperHero>;
}
class SuperHeroDetailScreen extends React.Component<Props> {

    public static navigationOptions = ({ navigation }: NavigationScreenProps<NavigationParams>) =>
        navigationOptions(fromNullable(navigation.state.params).map((p: NavigationParams) => p.title).getOrElse(""))

    public componentWillMount() {
        const superHeroId = this.props.navigation.getParam("superHeroId");
        this.props.onMount(superHeroId);
    }

    public componentWillUnmount() {
        this.props.onUnmount();
    }

    public componentWillReceiveProps(nextProps: Props) {
        if (this.props.superHero.isNone() && nextProps.superHero.isSome()) {
            const superHero = nextProps.superHero;
            const navigationBarTitle = superHero.map((sh) => sh.name).getOrElse("");
            setTimeout(() => {
                nextProps.navigation.setParams({ title: navigationBarTitle });
            });
        }
    }

    public render() {
        const { loading, superHero } = this.props;
        const doesTheSuperHeroExist = superHero.isSome();
        const shouldShowEmptyCase = !loading && !doesTheSuperHeroExist;
        return (
            <View
                style={styles.screen}>
                {loading && <Loading />}
                {shouldShowEmptyCase && <EmptyCase />}
                {superHero.fold(null, (sh) => this.renderSuperHero(sh))}
            </View>
        );
    }

    private renderSuperHero(superHero: SuperHero) {
        return (
            <ScrollView>
                <SuperHeroCell onTap={() => { }} superHero={superHero} />
                <Text style={styles.description}>{superHero.description}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#22282F",
    },
    description: {
        color: "white",
        margin: 16,
        fontSize: 16,
    },
});

const mapStateToProps = (state: RootState) => ({
    loading: state.superHeroDetail.loading,
    superHero: state.superHeroDetail.superHero,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
    onMount: fetchSuperHeroById,
    onUnmount: clearSuperHero,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperHeroDetailScreen);
