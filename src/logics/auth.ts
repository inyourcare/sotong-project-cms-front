
// const auth = 'Bearer ' + state.accessToken
const header = {
    'Content-Type': 'application/json',
    // 'Authorization': auth,
    // credentials: 'include',
    'Access-Control-Expose-Headers': '*',
    // 'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
}

const apiHost = "http://localhost:8080/";
// const apiHost = "s5xen.iptime.org:40011/";


export type GetAccessTokenParam = {
    userId: string,
    password: string
}
export const getAccessToken = (param: GetAccessTokenParam):any => {
    const apiName = "rest/common/auth/signIn"
    console.log('getAccessToken param::',param)
    if (param.userId && param.password) {
        const params = { signInId: param.userId, password: param.password }
        return fetch(apiHost + apiName, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(params)
        })
            .then(response => {
                console.log('getAccessToken response::',response)
                if (response.ok)
                    return response.json()
                else
                 throw Error('response not ok')
            })
            .catch((e) => {
                console.log('getAccessToken error::',e)
                throw e;
                // return e;
            })
    }
    throw Error('getAccessToken param is not valid')
}