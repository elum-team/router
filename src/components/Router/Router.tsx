import React, { useLayoutEffect } from 'react';
import { FC, Fragment, HTMLAttributes } from 'react';
import { nextPage } from "../../";
import { getter } from 'elum-state';
import { ACTIVE_VIEW } from 'atoms';

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    branch: string;
};

const Router: FC<IRouter> = ({
    branch,
    children
}) => {
    if (!getter(ACTIVE_VIEW)) { nextPage({ view: branch }) }
    return (<Fragment>{children}</Fragment>);
}

export default Router;
