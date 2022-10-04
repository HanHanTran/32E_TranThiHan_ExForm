const stateDefault = {
   danhSachSinhVien: [
//    {
//     maSV:'',
//     userName: '',
//     email:'',
//     phoneNumber:'',
//    }
   ],
   selectedUsers: null,
}
export const baitapForm = (state= stateDefault ,{type,payload}) =>{
    switch(type){
        case 'ADD_USER':{
            const data = [...state.danhSachSinhVien]
            const user = {...payload,id: Date.now()}
            data.push(user)
            return {...state,danhSachSinhVien: data}
        }
        case 'DELETE_USER':{
            const data = state.danhSachSinhVien.filter((item) => item.id !== payload)
            return {...state,danhSachSinhVien: data}
        }
        case 'EDIT_USER':{
            const user = state.danhSachSinhVien.find((item) => item.id === payload)
            return {...state,selectedUsers: user}
        }
        case 'UPDATE_USER':{
            const newUserList = state.danhSachSinhVien.map(item=>{
                if(item.id === payload.id){
                    return payload
                }
                return item
            })
            state.selectedUsers = null
            return {...state,danhSachSinhVien:newUserList}
            // const newUserList = state.danhSachSinhVien.map(item => item.id === payload.id ? payload:item)

        }
        
        default:
            return state
    }
}