import { Option } from "fp-ts/lib/Option";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import EmptyCase from "../../base-components/empty-case/EmptyCase";
import Loading from "../../base-components/loading/Loading";
import navigationOptions from "../../base-components/navigationOptions";
import { SuperHero } from "../../core/model";
import { RootAction, RootState } from "../../store";
import { fetchSuperHeroById } from "../super-hero-detail-actions";

interface Props {
    readonly navigation: any;
    readonly onMount: (superHeroId: string) => void;
    readonly loading: boolean;
    readonly superHero: Option<SuperHero>;
}
class SuperHeroDetailScreen extends React.Component<Props> {

    public static navigationOptions = ({ navigation }) => navigationOptions(navigation.state.params.title);

    public componentWillMount() {
        const superHeroId = this.props.navigation.getParam("superHeroId");
        this.props.onMount(superHeroId);
    }

    public componentWillReceiveProps(nextProps: Props) {
        if (this.props.superHero.isNone && nextProps.superHero.isSome()) {
            const superHero = nextProps.superHero;
            const navigationBarTitle = superHero.map((sh) => sh.name).getOrElse("");
            setTimeout(() => {
                nextProps.navigation.setParams({ title: navigationBarTitle });
            });
        }
    }

    public render() {
        const { loading, superHero } = this.props;
        const doesTheSuperHeroExist = superHero.isSome;
        const shouldShowEmptyCase = !loading && !doesTheSuperHeroExist;
        const shouldShowSuperHero = !loading && doesTheSuperHeroExist;
        return (
            <View
                style={styles.screen}>
                {loading && <Loading />}
                {shouldShowEmptyCase && <EmptyCase />}
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
    loading: state.superHeroDetail.loading,
    superHero: state.superHeroDetail.superHero,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
    onMount: fetchSuperHeroById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperHeroDetailScreen);
