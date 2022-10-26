import { createAction, createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { takeEvery, put } from "redux-saga/effects";
import createAsyncSaga, { createAsyncReducer, transformToArray } from "../util/reducerUtils";
import { getAccessToken, GetAccessTokenParam } from "../../logics/auth";
import { Buffer } from 'buffer';


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
export const SIGN_OUT_ACTION = "app/SIGN_OUT_ACTION";
export const signOutAction = createAction(SIGN_OUT_ACTION)<string | null>();

// set tokens
export const SET_TOKENS_ACTON = "app/SET_TOKENS_ACTON";
export const setTokenInfoAction = createAction(SET_TOKENS_ACTON)<SetTokensActionParam>();


////////////////////////////////////////////////////////////type
const actions = { createAsyncAction, signOutAction, setTokensAction: setTokenInfoAction };
export type AppAction = ActionType<typeof actions>
export type AppState = {
    signInAsyncAction: any,
    accessToken: string,
    refreshToken: string,
    userInfoFromToken: UserInfoFromToken
}
// action params
export type SetTokensActionParam = {
    accessToken: string,
    refreshToken: string,
    userInfoFromToken: UserInfoFromToken
}
export type SignInSuccessResult = {
    accessToken: string,
    grantType: string,
    refreshToken: string
}
export type UserInfoFromToken = {
    auth: AUTH_ROLE,
    exp: number,
    iat: number,
    sub: string
} | null
const enum AUTH_ROLE {
    ADMIN = 'ROLE_ADMIN',
    USER = 'ROLE_USER',
}

////////////////////////////////////////////////////////////reducer
const initialState: AppState = {
    signInAsyncAction: null,
    accessToken: "",
    refreshToken: "",
    userInfoFromToken: null
};

const app = createReducer<AppState, AppAction>(initialState)
    .handleAction(
        transformToArray(signInAsyncAction),
        createAsyncReducer(signInAsyncAction, "signInAsyncAction")
    )
    .handleAction(setTokenInfoAction, (state, action) => {
        return {
            ...state,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
            userInfoFromToken: action.payload.userInfoFromToken
        }
    })


////////////////////////////////////////////////////////////saga
export function* appSaga() {
    yield takeEvery(SIGN_IN_ACTION, createAsyncSaga(signInAsyncAction, getAccessToken));
    yield takeEvery(SIGN_IN_SUCCESS_ACTION, signInSuccessSaga);
}

// function* signInSaga(action: ReturnType<typeof signInAsyncAction.request>) {
//     yield call(getAccessToken , action.payload)
// }
function* signInSuccessSaga(action: ReturnType<typeof signInAsyncAction.success>) {
    console.log('signInSuccessSaga action::', action)
    const result = action.payload as SignInSuccessResult;
    const token = result.accessToken;
    const base64Payload = token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE
    const payload = Buffer.from(base64Payload, 'base64');
    const userInfo: UserInfoFromToken = JSON.parse(payload.toString());
    console.log('jwt infos::', userInfo);
    yield put(setTokenInfoAction({
        accessToken: result.grantType + ' ' + result.accessToken,
        refreshToken: result.grantType + ' ' + result.refreshToken,
        userInfoFromToken: userInfo
    }))
}

export default app;