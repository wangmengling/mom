// import ajax from './Apis'; //经过封装的加强型 ajax 函数
import axios from 'axios';
//这是名空间，对普通action做划分
const prefix = 'udp/';

let actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    sendMessage: (body) => (dispatch, getState) => {

        //如果正在摘苹果，则结束这个thunk, 不执行摘苹果

        //通知开始摘苹果
        // dispatch(actions.beginPickApple());

        //发送摘苹果请求
        axios.get('http://localhost:4000/udp/sockets', {
          params: {
            context: body.context
          }
        })
        .then(function (response) {
          // console.log(response.data);
        })
        .catch(function (error) {
          alert("sdsdsd")
          console.log(error);
        });

        return

        // axios.get('http://localhost:4000/udp/sockets')
        // .then(function (response) {
        //   console.log(response.data);
        //   alert(response.data)
        //   res.json(response.data)
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        alert("sucess")
        ajax({
            url: '/udp/sockets',
            method: 'GET'
        }).done(data => {
          alert("sucess")
            dispatch(actions.donePickApple(data.weight))
        })
        .fail(error => {
          alert("error")
            dispatch(actions.failPickApple(error));
        })
    },

    beginPickApple: () => ({
        type: 'udp/SEND_MESSAGE'
    }),

    donePickApple: appleWeight => ({
        type: 'udp/RECIVE_MESSAGE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: appleId => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })

};

export default actions;
