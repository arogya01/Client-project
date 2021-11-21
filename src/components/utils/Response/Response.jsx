import React from 'react';
import { ResponseResult,ResponseSectionWrapper } from './Response.elements';
// import {Spinner} from '../../utils/Loader.element';

export const Response = ({url,params,req,header}) => {
    
    //  useEffect(() => {
    //        <Spinner/>
    //      return () => {
             
    //      }
    //  }, [url,params,req,header]);

    return (
        <ResponseSectionWrapper>
        <ResponseResult>
            curl --location --request {req} '{url}?{params}' \<br /> 
            --header  {header} 
        </ResponseResult>
      </ResponseSectionWrapper>
    )
}
