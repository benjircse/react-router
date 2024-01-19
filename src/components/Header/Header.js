import React from 'react';
import CustomeLink from '../CustomeLink/CustomeLink';
const Header = () => {
    return (
        <div>
            <CustomeLink to='/'>Home</CustomeLink>
            <CustomeLink to="/friends">Friend</CustomeLink>
            <CustomeLink to="/about">About</CustomeLink>
            <CustomeLink to="/login">Login</CustomeLink>
             
        </div>
    );
};

export default Header;