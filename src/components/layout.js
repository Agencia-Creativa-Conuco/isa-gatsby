import React from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/react';

import globalStyles from '../components/styles/global-styles';
import FontFace from "../components/styles/font-faces";
import Header from './header';

const Layout = ({ children }) => {
    return ( 
        <>

            <Helmet>
                
                <title>ISA WEB</title>
                <meta name="description" content="UNIVERSIDAD ISA" />

                {/* FONTS */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link> */}

            </Helmet>

            <FontFace />

            <Global styles={ globalStyles() } />

            <Header />

            { children }
        </>
     );
}
 
export default Layout;