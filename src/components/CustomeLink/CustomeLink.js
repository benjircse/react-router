import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomeLink = ({children ,to , ...props}) => {
    let Resolved = useResolvedPath(to);
    let match = useMatch({path:Resolved.pathname, end:true})
    return (
        <div>
            <Link
            style={{color:match ? 'red':'black' , textDecoration:match ? 'underline':'none'}}
            to={to}
            {...props}
            >{children}</Link>
        </div>
    );
};

export default CustomeLink;