// import { connect } from "react-redux";
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'


const Layout = () => (
    <React.Fragment>
        
        <Navbar/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
)

export default Layout

// const mapStateToProps = state =>({})

// export default connect(mapStateToProps,null) (Layout)