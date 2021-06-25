//code tạo ra component: rcc (react class component) statefull component

import React, { Component } from 'react'

export default class DemoComponent extends Component {
    
    
    //phương thức render chứa nội dung giao diện của thẻ
    //Nội dung của component phải được bao phủ bởi 1 thẻ: thường dùng div
    render() {
        return (
            <div className="container">
                <div className="content">
                    <p className="display-4 p-2">Title</p>
                    <p>Content</p>
                </div>
            </div>
        )
    }
}
