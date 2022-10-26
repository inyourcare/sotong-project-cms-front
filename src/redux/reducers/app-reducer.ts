import { createAction, createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { takeEvery } from "redux-saga/effects";


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
)<string, string, Error>();

// sign out
export const SIGN_OUT_ACTION = "app/SIGN_OUT";
export const signOutAction = createAction(SIGN_OUT_ACTION)<string|null>();


////////////////////////////////////////////////////////////type
const actions = { createAsyncAction, signOutAction};
export type AppAction = ActionType<typeof actions>
export type AppState = {
    accessToken: string,
    refreshToken: string,
}

////////////////////////////////////////////////////////////reducer
const initialState: AppState = {
    accessToken:"",
    refreshToken:"",
};

const app = createReducer<AppState, AppAction>(initialState)


////////////////////////////////////////////////////////////saga
export function* appSaga() {
    yield takeEvery(SIGN_IN_ACTION, signInSaga);
    yield takeEvery(SIGN_OUT_ACTION, signOutSaga);
}

function* signInSaga(action: ReturnType<typeof signInAsyncAction.request>) {
}
function* signOutSaga(action: ReturnType<typeof signOutAction>) {
}

export default app;