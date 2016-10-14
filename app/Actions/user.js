import ajax from './Apis'; //经过封装的加强型 ajax 函数
import axios from 'axios';

import  'whatwg-fetch';

const defaultState = {
    userName:'ssssssssssssssss'
}
let actions = {
    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    login: (body) => (dispatch, getState) => {
        //如果正在摘苹果，则结束这个thunk, 不执行摘苹果
        // console.log(body)
        
        // dispatch(actions.loginIn())
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            // mode:"no-cors",
            // credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            body: 'username=' + body.username + '&password=' + body.password
        })
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log(json.data)
            dispatch(actions.loginSuccess(json.data))
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    },
    loginIn:() => ({
        type: 'LOGIN_IN'
    }),
    loginSuccess: userInfo => ({
        type: 'LOGIN_SUCCESS',
        payload: userInfo
    }),
};

export default actions;
