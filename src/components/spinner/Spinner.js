import React from 'react';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const Spinner = (props) => {
     const spinnerItem = props.loading ? <BounceLoader css={override}
     size={90}
     color={"#af0426"}
     loading={true} /> : null
     return (spinnerItem)
}


export default Spinner;