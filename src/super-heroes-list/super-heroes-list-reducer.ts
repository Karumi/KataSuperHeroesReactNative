import { ActionType } from "typesafe-actions";
import { SuperHero } from "../core/model";
import * as superHeroesActions from "./super-heroes-list-actions";
import { LOADING_SUPER_HEROES, SUPER_HEROES_FETCHED } from "./super-heroes-list-constants";

export type SuperHeroesListActions = ActionType<typeof superHeroesActions>;

export interface SuperHeroesListState {
    readonly loading: boolean;
    readonly superHeroes: SuperHero[];
}

const initialState: SuperHeroesListState = {
    loading: false,
    superHeroes: [],
};

export default function superHeroesListReducer(
    state: SuperHeroesListState = initialState, action: SuperHeroesListActions) {
    switch (action.type) {
        case LOADING_SUPER_HEROES:
            return Object.assign({}, state, {
                loading: true,
                superHeroes: [],
            });
        case SUPER_HEROES_FETCHED:
            return Object.assign({}, state, {
                loading: false,
                superHeroes: action.payload.superHeroes,
            });
        default:
            return state;
    }
}
