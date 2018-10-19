import { none, Option } from "fp-ts/lib/Option";
import { ActionType } from "typesafe-actions";
import { SuperHero } from "../core/model";
import * as superHeroDetailActions from "./super-hero-detail-actions";
import { LOADING_SUPER_HERO, SUPER_HERO_FETCHED } from "./super-hero-detail-constants";

export type SuperHeroDetailActions = ActionType<typeof superHeroDetailActions>;

export interface SuperHeroDetailState {
    readonly loading: boolean;
    readonly superHero: Option<SuperHero>;
}

const initialState: SuperHeroDetailState = {
    loading: false,
    superHero: none,
};

export default function superHeroesListReducer(
    state: SuperHeroDetailState = initialState, action: SuperHeroDetailActions) {
    switch (action.type) {
        case LOADING_SUPER_HERO:
            return Object.assign({}, state, {
                loading: true,
                superHero: none,
            });
        case SUPER_HERO_FETCHED:
            return Object.assign({}, state, {
                loading: false,
                superHero: action.payload.superHero,
            });
        default:
            return state;
    }
}
