import React from "react";
import { ResponseResult, ResponseSectionWrapper, TerminalWrapper } from "./Terminal.elements";
// import {Spinner} from '../../utils/Loader.element';

export const Terminal = ({ url, params, req, header, rawData }) => {
  //  useEffect(() => {
  //        <Spinner/>
  //      return () => {

  //      }
  //  }, [url,params,req,header]);

  console.log(header);
  console.log(rawData);
  return (
    <TerminalWrapper>
    <ResponseSectionWrapper>
      <ResponseResult>
      {  
        (params) ? (
          <>
          <span> curl --location --request {req} '{url}?{params}'</span> <br />
        {header.map((element) => {
          return (
            <>
            <span key={element}>--header:'{element}'</span>
            <br/>
            </>
        )
        })}
        </>
        ) 
        : (
          <>
          <span> curl --location --request {req} '{url}'</span> <br />
        {header.map((element) => {
         return (
          <>
          <span key={element}>--header:'{element}'</span>
          <br/>
          </>
      )
        })}
        <span>--raw:`{rawData}`</span><br/>
        </>
        )
       } 
      </ResponseResult>
    </ResponseSectionWrapper>
    </TerminalWrapper>
  );
};
