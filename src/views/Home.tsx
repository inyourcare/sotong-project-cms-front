import {
    Link
} from "react-router-dom";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

function HomeContent() {

    const [state, setState] = React.useState({
        prefix: "home_textfield_",
        apiHost: "http://localhost:8080/",
        // datasourceType: "amazon-maria-datasource",
        // datasourceType: "sotong-maria-datasource",
        // databaseName: "cms_test",
        // tableName: "TEST_TABLE",
        // columns: "",
        // jwt: "",
        accessToken: "",
        refreshToken: "",
        grantType: ""
    });
    const callAPI = (apiName: string, params?: {}) => {
        const auth = 'Bearer ' + state.accessToken
        const header = { 
            'Content-Type': 'application/json',
            'Authorization': auth,
            // credentials: 'include',
            'Access-Control-Expose-Headers': '*',
            // 'Access-Control-Allow-Origin': '*',
        }
        console.log('callAPI',state,header)
        if (params) {
            console.log('POST call:: ',state.apiHost + apiName, params,header)
            fetch(state.apiHost + apiName, {
                method: 'POST',
                headers: header,
                body: JSON.stringify(params)
            })
                .then(response => {
                    console.log(response)
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    setState({
                        ...state,
                        ...data
                    });
                    // if (data.result){
                    //     setState({
                    //         ...state,
                    //         ...data.result
                    //     });
                    // }
                })
                .then(()=>{console.log('[state]' , state)})
        } else {
            console.log('GET call:: ',state.apiHost + apiName, '/', params)
            fetch(state.apiHost + apiName)
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        const key: string = event.target.id.replace(state.prefix, '')

        setState({
            ...state,
            [key]: event.target.value,
        });
    }

    return (
        <div>
            <TextareaAutosize
                maxRows={10}
                // aria-label="maximum height"
                // placeholder="Maximum 4 rows"
                defaultValue=
                {"-For Test-\n"+
                "TEST_TABLE \n"
                +"NAME VARCHAR(255),AGE INT,HEIGHT INT\n"
                +"test"}
                style={{ width: 500, whiteSpace: "pre-wrap"}}
            />
            <Button
                variant="contained"
                // onClick={() => callAPI("test",state)}
                onClick={() => callAPI("rest/test/get",0)}
                // sx={{ mt: 3, ml: 1 }}
            >
                {"testCall"}
            </Button>
            <Button
                variant="contained"
                // onClick={() => callAPI("test",state)}
                onClick={() => callAPI("rest/test/post",{test: true})}
                // sx={{ mt: 3, ml: 1 }}
            >
                {"testPost"}
            </Button>
            <br />
            <TextField id={state.prefix + "tableName"} label="Table Name" variant="filled" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleTextFieldChange(e)} />
            <TextField id={state.prefix + "columns"} label="Columns => ex) NAME VARCHAR(255),AGE INT,HEIGHT INT" variant="filled" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleTextFieldChange(e)} />
            <Button
                variant="outlined"
                // onClick={(e) => callAPI("addNewBoard", state)}
                onClick={(e) => callAPI("admin/addNewBoard", 
                {
                    boardName:"newName3",boardType:"NORMAL",boardSkinType:"NORMAL",ableToReply:"Y"
                    ,allowFileAttach:"Y",allowUnknown:"Y",allowUnknownReply:"Y",commentable:"Y",enable:"Y"
                    ,onlyAdmin:"Y"
                })}
                // sx={{ mt: 3, ml: 1 }}
            >
                {"addNewBoard"}
            </Button>
            <Button
                variant="outlined"
                onClick={(e) => callAPI("rest/common/auth/signIn", 
                {
                    signInId: "admin", password: "pass12#$"
                })}
            >
                {"signIn"}
            </Button>
            <Button
                variant="outlined"
                onClick={(e) => callAPI("auth/signIn", 
                {
                    signInId: "normalUser1", password: "pass12#$"
                })}
            >
                {"signIn As User"}
            </Button>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                    <Link to="/signIn">SignIn</Link>
                </li>
                <li>
                    <Link to="/album">Album</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/signInSide">SignInSide</Link>
                </li>
                <li>
                    <Link to="/signUp">signUp</Link>
                </li>
                <li>
                    <Link to="/stickyFooter">StickyFooter</Link>
                </li> */}
            </ul>
        </div>
    )
}
export default function Home() {
    return <HomeContent />;
}