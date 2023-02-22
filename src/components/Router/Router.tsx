import React, { useLayoutEffect } from 'react';
import { FC, Fragment, HTMLAttributes } from 'react';
import { nextPage } from "../../";

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    branch: string;
};

const Router: FC<IRouter> = ({
    branch,
    children
}) => {
    useLayoutEffect(() => nextPage({ view: branch }), []);
    return (<Fragment>{children}</Fragment>);
}

export default Router;
