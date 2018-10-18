import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import devToolsEnhancer from "remote-redux-devtools";
import { StateType } from "typesafe-actions";
import { SuperHeroDetailActions } from "./super-hero-detail/super-hero-detail-reducer";
import superHeroDetailReducer from "./super-hero-detail/super-hero-detail-reducer";
import { SuperHeroesListActions } from "./super-heroes-list/super-heroes-list-reducer";
import superHeroesListReducer from "./super-heroes-list/super-heroes-list-reducer";

export type RootState = StateType<typeof rootReducer>;
export type RootAction = SuperHeroesListActions | SuperHeroDetailActions;

const rootReducer = combineReducers({
    superHeroesList: superHeroesListReducer,
    superHeroDetail: superHeroDetailReducer,
});

function configureStore(initialState?: object) {
    const middleware = compose(
        applyMiddleware(thunk),
        devToolsEnhancer(),
    );
    return createStore(
        rootReducer,
        initialState!,
        middleware);
}
export default configureStore();
