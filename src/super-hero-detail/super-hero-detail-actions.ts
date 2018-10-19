import { Option } from "fp-ts/lib/Option";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { action } from "typesafe-actions";
import { SuperHero } from "../core/model";
import { getSuperHeroById } from "../core/super-heroes-repository";
import { CLEAR_SUPER_HERO, LOADING_SUPER_HERO, SUPER_HERO_FETCHED } from "./super-hero-detail-constants";

export const fetchSuperHeroById: ActionCreator<
    ThunkAction<any, any, any, any>> = (superHeroId: string) => (dispatch: Dispatch) => {
        dispatch(loadingSuperHero);
        setTimeout(() => {
            getSuperHeroById(superHeroId).then((sh) => dispatch(superHeroFetched(sh)));
        }, 1000);
    };

export const clearSuperHero: ActionCreator<Action> = () => action(CLEAR_SUPER_HERO);

export const loadingSuperHero: Action =
    action(LOADING_SUPER_HERO);

export const superHeroFetched: ActionCreator<Action> = (hero: Option<SuperHero>) =>
    action(
        SUPER_HERO_FETCHED,
        { superHero: hero },
    );
