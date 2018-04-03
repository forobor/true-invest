import React from "react";
import styled from "styled-components";

import { colors } from '../../styles/theme'

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const StyledLoader = styled.div`
    border: 16px solid ${colors.blue_trans};
    border-radius: 50%;
    border-top: 16px solid ${colors.blue};
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite; 
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`

const Loader = () => (
    <LoaderContainer>
        <StyledLoader />
    </LoaderContainer>
)

export default Loader;