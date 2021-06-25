import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import ContentComponent from './ContentComponent'
import Footer from './Footer'
export default class BaiTapComponent extends Component {
    
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <Navigation/>
                    </div>
                    <div className="col-7">
                        <ContentComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}
