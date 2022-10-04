import React, { Component } from 'react'
import {connect} from 'react-redux'
 class DanhSachSv extends Component {
  render() {
    const {danhSachSinhVien} = this.props
    return (
      <div className='mt-3'>
        <div className="">
            <table className='w-100'>
                <thead className='bg-dark text-light'>
                <tr className='w-100'>
                    <th className='p-3'>Mã sinh viên</th>
                    <th className='p-3'>Họ tên</th>
                    <th className='p-3'>Số điện thoại</th>
                    <th className='p-3'>Email</th>
                    <th className='p-3'></th>
                    <th></th>
                </tr>

                </thead>
                <tbody>
                  {danhSachSinhVien.map((item,index) =>(
                        <tr key={index}>
                            {/* <td>{index+1}</td> */}
                            <td>{item.maSV}</td>
                            <td>{item.userName}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>
                              <button className='btn btn-warning mx-2'
                              onClick={() => {
                                this.props.dispatch({
                                  type: 'DELETE_USER',
                                  payload: item.id
                                })
                              }}>Xoá
                              </button>
                              <button className='btn btn-danger '
                                onClick={() => {
                                  this.props.dispatch({
                                    type: 'EDIT_USER',
                                    payload: item.id,
                                  })
                                }}
                              >Edit
                              </button>
                            
                            </td>
                            
                        </tr>

                        )
                    )
                  }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return {
        danhSachSinhVien: state.baitapForm.danhSachSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSv)
