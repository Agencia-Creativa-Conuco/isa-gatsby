import React from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import globalStyles from '../components/styles/global-styles';
import FontFace from "../components/styles/font-faces";
import Header from './header';
import { set } from 'lodash';

const Layout = ({ children }) => {

    const {
        wp: {
            generalSettings: settings
        }
    } = useStaticQuery( graphql`
        query MyQuery {
            wp {
                id
                generalSettings {
                dateFormat
                description
                email
                language
                startOfWeek
                timeFormat
                timezone
                title
                url
                }
            }
        }
    ` );

    return ( 
        <>

            <Helmet>
                
                <title>{settings.title}</title>
                <meta name="description" content={settings.description} />

                {/* FONTS */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link> */}

            </Helmet>

            <FontFace />

            <Global styles={ globalStyles({ settings }) } />

            <Header />

            <Main>
                { children }
            </Main>
        </>
     );
}
 
export default Layout;

const Main = styled.main`
    overflow: hidden;
`;