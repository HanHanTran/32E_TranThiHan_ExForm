import React, { Component } from 'react'
import DanhSachSv from './DanhSachSv'
import FormDangKy from './FormDangKy'

export default class BTForm extends Component {
    render() {
        return (
            <div className='mt-1 container'>

                <FormDangKy />
                <DanhSachSv />
            </div>
        )
    }
}
