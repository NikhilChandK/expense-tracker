import React, { ReactElement } from 'react';
import { docsConfig } from '../../config/docs';
import { NavLink } from 'react-router-dom';

const SideNav = (): ReactElement => {
    return (
        <>
            {docsConfig.sideNav.map((item) => (
                <NavLink to={`${item.href}`} key={item.title}>
                    {item.title}
                </NavLink>
            ))}
        </>
    );
};

export { SideNav };
