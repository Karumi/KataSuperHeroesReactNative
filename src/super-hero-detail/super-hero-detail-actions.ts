import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { action } from "typesafe-actions";
import { SuperHero } from "../core/model";
import { LOADING_SUPER_HERO, SUPER_HERO_FETCHED } from "./super-hero-detail-constants";

export const fetchSuperHeroeById: ActionCreator<
    ThunkAction<any, any, any, any>> = (superHeroId: string) => (dispatch: Dispatch) => {
        dispatch(loadingSuperHero);
        // Load super heroes and invoke
    };

export const loadingSuperHero: Action =
    action(LOADING_SUPER_HERO);

export const superHeroFetched: ActionCreator<Action> = (hero: [SuperHero]) =>
    action(
        SUPER_HERO_FETCHED,
        { superHero: hero },
    );
