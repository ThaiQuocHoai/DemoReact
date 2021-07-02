const stateGioHangDefault = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", "soLuong":1 },
]

export const gioHangReducer = (state = stateGioHangDefault, action) => {
    console.log('action', action);
    switch(action.type){
        case 'THEM_VAO': {
            //nhan duoc sanphamclick thong qua action.
            let spClick = {...action.sanPhamClick, soLuong:1};
            let sanPhamClick = state.find(sp => sp.maSP === spClick.maSP);
            if(sanPhamClick){
                sanPhamClick.soLuong += 1; 
            }else{
                state=[...state, spClick];
            }
            return [...state];
        }
        case 'XOA' : {
            let maSP = action.maSP

            let gioHangCapNhat = [...state];
            gioHangCapNhat = gioHangCapNhat.filter(sp=>sp.maSP !== maSP);
             return [...gioHangCapNhat]
        }
        case 'TANG_GIAM_SO_LUONG' : {
            let maSP = action.maSP;
            let soLuong = action.soLuong;
            let ghUpd = [...state];
            let item = ghUpd.find(sp=>sp.maSP === maSP);
            if(item){
                item.soLuong += soLuong;
                if(item.soLuong === 0){
                    ghUpd = ghUpd.filter(sp=>sp.maSP !== item.maSP);
                }
            }
            return [...ghUpd];
        }
    }

    return state;
}