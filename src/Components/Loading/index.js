import React from 'react';
import { Load } from './styles'
import { css } from "@emotion/core";
import { SyncLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Loading(props){
    return(
        <Load>
            <SyncLoader
                css={override}
                size={20}
                color={"#999"}
                loading={props.load}
            />
        </Load>    
    )
}