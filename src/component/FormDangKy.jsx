import React, { Component } from 'react'
import { connect } from 'react-redux'

 class FormDangKy extends Component {
    state={
        values: {
            maSV: '',
            userName: '',
            phoneNumber: '',
            email: '',
           
        },
        errors:{},
    }

    handleState = (event) => {
        const { name, value } = event.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        })

        // console.log(event.target.value)
        // console.log(event.target.name)
    }
    handleSubmit = (event) => {
        //ngăn trình duyệt reload tự động
        event.preventDefault()
        if (!event.target.checkValidity()) {
            return
        }
        // this.props.dispatch({
        //     type: 'ADD_USER',
        //     payload: this.state.values,
        // })
        this.props.dispatch({
            type:this.props.selectedUsers ? 'UPDATE_USER': 'ADD_USER',
            payload: this.state.values
        })
    }
    static getDerivedStateFromProps = (nextProps, currentState) => {
        if (nextProps.selectedUsers && nextProps.selectedUsers.id !== currentState.values.id) {
            currentState.values = nextProps.selectedUsers
        }
        return currentState
    }
    // validation hàm này chay khi 
    handleBlur = (event) => {
        const {
          name,
          title,
          validationMessage,
          validity,
          minLength,
          maxLength,
        } = event.target
        //const {valueMissing} = validity
        const { valueMissing } = validity
        const { tooShort } = validity
        const {patternMismatch} = validity
    
        let mess = ''
        if (valueMissing) {
          mess = `${title} không được bỏ trống`
        }
        if(tooShort){
          mess = `${title} từ ${minLength} đến ${maxLength} ký tự`
    
        }
        if(patternMismatch){
          mess = `${title} không đúng định dạng `
        }
        this.setState({
          errors: {
            ...this.state.errors,
            // [name]: validationMessage,
            [name]: mess,
          }
        })
      }

  render() {
    const {selectedUsers} = this.props
    const {maSV, userName, phoneNumber,email} = this.state.values || {}
    return (
      <div className='container'>
            <h3 className='bg-dark text-white py-2 '>Thông tin sinh viên</h3>
            <form action=""
             id="form"
             noValidate
           
             onSubmit={this.handleSubmit}
             //validation
            //  onBlur = {this.handleBlur}
            >
                <div className="text-left ">
                    <div className="form-group row ">
                        <div className="col-6">
                            <div className="">
                                <h5>Mã sinh viên</h5>
                                <input
                                    className='form-control w-100'
                                    //validation
                                    required
                                    minLength={4}
                                    maxLength={6}
                                    title='Mã sinh viên'
                                    value={maSV}
                                    name='maSV'
                                    type="text"
                                    placeholder='Mã sinh viên'
                                    onChange={this.handleState}
                                    onBlur={this.handleBlur}
                                />
                                <span className="text-danger">
                                    {this.state.errors.maSV}
                                </span>
                            </div>
                            <div className="my-4">
                                <h5>Số điện thoại</h5>
                                <input
                                    className='form-control'
                                     required
                                     title='Số điện thoại'
                                    value={phoneNumber}
                                    name='phoneNumber'
                                    type="text"
                                    placeholder='Số điện thoại'
                                    onChange={this.handleState}
                                    onBlur={this.handleBlur} />
                                <span className="text-danger">
                                    {this.state.errors.phoneNumber}
                                </span>
                            </div>


                        </div>
                        <div className="col-6">
                            <div className="">
                                <h5>Họ tên</h5>
                                <input className='form-control'
                                    required
                                    title='Họ tên'
                                    value={userName} name='userName' type="text" placeholder='Họ tên'
                                    onChange={this.handleState}
                                    onBlur={this.handleBlur} />
                                <span className="text-danger">
                                    {this.state.errors.userName}
                                </span>
                            </div>
                            <div className="my-4">
                                <h5>Email</h5>
                                <input className='form-control'
                                    required
                                     value={email}
                                    title="Email"
                                    name='email'
                                    type="text"
                                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"

                                    placeholder='Email'
                                    onChange={this.handleState}
                                    onBlur={this.handleBlur} />
                                <span className="text-danger">
                                    {this.state.errors.email}
                                </span>
                            </div>

                        </div>

                    </div>
                    
                </div>
                <button type='submit'   className='btn btn-primary mt-4'>Thêm sinh viên</button>
                <button type='submit'   className='btn btn-success mt-4 mx-3 '>Cập nhật</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        ...state.baitapForm,

    }
    
}
export default connect(mapStateToProps)(FormDangKy)