// import { createAction, handleAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
// import axios from "axios";
// import {actionCreators as userActions} from './user'
//
// //Action
// const SIGN_USER = "SIGN_USER";
//
// const initialState = {
//     user2: null,
// };
// const signUser = createAction(SIGN_USER, (user2) => ({ user2 }));
//
//
//
// //reducer
// //produce (immer) 이용하여 불변성 유지
// export default handleActions({
//     [SIGN_USER]:(state,action)=>
//         produce(state,(draft)=>{
//             draft.user2=action.payload.user;
//         }),
//     },
//     initialState
// );
//
// const  actionCreators = {
//     signUp
// }
