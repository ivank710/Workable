import React from 'react';
import NavbarContainer from '../../components/nav/navbar_container';
import { withRouter } from 'react-router-dom';


const Layout = (props) => {

    return (
        <>
            <NavbarContainer />
            {props.children}
        </>

    )
};

export default withRouter(Layout);