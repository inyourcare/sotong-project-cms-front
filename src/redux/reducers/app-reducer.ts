import { createAction, createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { takeEvery, call } from "redux-saga/effects";
import createAsyncSaga, { createAsyncReducer, transformToArray } from "../util/reducerUtils";
import { getAccessToken, GetAccessTokenParam } from "../../logics/auth";


////////////////////////////////////////////////////////////action
// sign in
export const SIGN_IN_ACTION = "app/SIGN_IN_ACTION";
export const SIGN_IN_SUCCESS_ACTION = "app/SIGN_IN_SUCCESS_ACTION";
export const SIGN_IN_ERROR_ACTION = "app/SIGN_IN_ERROR_ACTION";
export const signInAsyncAction = createAsyncAction(
    // action.type
    SIGN_IN_ACTION,
    SIGN_IN_SUCCESS_ACTION,
    SIGN_IN_ERROR_ACTION
    // result types
)<GetAccessTokenParam, Object, Error>();

// sign out
export const SIGN_OUT_ACTION = "app/SIGN_OUT";
export const signOutAction = createAction(SIGN_OUT_ACTION)<string | null>();


////////////////////////////////////////////////////////////type
const actions = { createAsyncAction, signOutAction };
export type AppAction = ActionType<typeof actions>
export type AppState = {
    signInAsyncAction: any,
}

////////////////////////////////////////////////////////////reducer
const initialState: AppState = {
    signInAsyncAction: null,
};

const app = createReducer<AppState, AppAction>(initialState)
    .handleAction(
        transformToArray(signInAsyncAction),
        createAsyncReducer(signInAsyncAction, "signInAsyncAction")
    )


////////////////////////////////////////////////////////////saga
export function* appSaga() {
    yield takeEvery(SIGN_IN_ACTION,createAsyncSaga(signInAsyncAction,getAccessToken));
    // yield takeEvery(SIGN_OUT_ACTION, signOutSaga);
}

// function* signInSaga(action: ReturnType<typeof signInAsyncAction.request>) {
//     yield call(getAccessToken , action.payload)
// }
// function* signOutSaga(action: ReturnType<typeof signOutAction>) {
// }

export default app;