import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { action } from "typesafe-actions";
import { SuperHero } from "../core/model";
import { getSuperHeroes } from "../core/super-heroes-repository";
import { LOADING_SUPER_HEROES, SUPER_HEROES_FETCHED } from "./super-heroes-list-constants";

export const fetchSuperHeroes: ActionCreator<
    ThunkAction<any, any, any, any>> = () => (dispatch: Dispatch) => {
        dispatch(loadingSuperHeroes);
        getSuperHeroes().then((superHeroes) => {
            dispatch(superHeroesFetched(superHeroes));
        });
    };

export const loadingSuperHeroes: Action =
    action(LOADING_SUPER_HEROES);

export const superHeroesFetched: ActionCreator<Action> = (heroes: [SuperHero]) =>
    action(
        SUPER_HEROES_FETCHED,
        { superHeroes: heroes },
    );
