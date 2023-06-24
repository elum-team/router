import React, { FC, Fragment, HTMLAttributes, useEffect } from "react";
import { getter } from "elum-state";
import { backPage, nextPage } from "../../";
import { ACTIVE_VIEW } from "../../atoms";

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    branch: string;
};

const Router: FC<IRouter> = ({
    branch,
    children
}) => {
    if (!getter(ACTIVE_VIEW)) { nextPage({ view: branch }) }

    useEffect(() => {
        window.addEventListener("popstate", () => backPage());
        if (window.location.protocol !== "file:") {
            window.history.pushState(undefined, "");
        }
    }, []);

    return (<Fragment>{children}</Fragment>);
}

export default Router;
