import React from 'react';
import { ResponseResult,ResponseSectionWrapper } from './Response.elements';

export const Response = ({Url,Params,Request,Headers}) => {
    return (
        <ResponseSectionWrapper>
        <ResponseResult>
            curl --location 
        </ResponseResult>
      </ResponseSectionWrapper>
    )
}
