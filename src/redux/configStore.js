import {combineReducers, createStore} from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';


const rootRedux = combineReducers({
    //liet ke cac state cua ung dung
    stateGioHang: gioHangReducer,
});

//doi voi state la object hoac array
//khi thay doi phai rang lai object hoac array mới immutable redux
/*
    ví dụ objA
    objA.thuocTinh = thuocTinhMoi => khong render
    objA = {} => rán obj mới => render
*/

export const store = createStore(rootRedux, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());