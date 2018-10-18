import { ActionType } from "typesafe-actions";
import { SuperHero } from "../core/model";
import * as superHeroDetailActions from "./super-hero-detail-actions";
import { LOADING_SUPER_HERO, SUPER_HERO_FETCHED } from "./super-hero-detail-constants";

export type SuperHeroDetailActions = ActionType<typeof superHeroDetailActions>;

export interface SuperHeroDetailState {
    readonly loading: boolean;
    readonly superHero?: SuperHero;
}

const initialState: SuperHeroDetailState = {
    loading: false,
    superHero: null,
};

export default function superHeroesListReducer(
    state: SuperHeroDetailState = initialState, action: SuperHeroDetailActions) {
    switch (action.type) {
        case LOADING_SUPER_HERO:
            return state;
        case SUPER_HERO_FETCHED:
            return state;
        default:
            return state;
    }
}
