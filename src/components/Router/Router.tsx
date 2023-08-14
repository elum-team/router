import { FC, HTMLAttributes, useEffect } from "react";
import { getter } from "elum-state";
import { backPage, nextPage } from "../../";
import { ACTIVE_APP, ACTIVE_VIEW } from "../../atoms";

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    app?: string
    branch: string;
};

const Router: FC<IRouter> = ({
    app = "web",
    branch,
    children
}) => {

    if (!getter(ACTIVE_VIEW) || !getter(ACTIVE_APP)) {
        nextPage({ app: app, view: branch })
    }

    useEffect(() => {
        window.addEventListener("popstate", () => backPage());
        if (window.location.protocol !== "file:") {
            window.history.pushState(undefined, "");
        }
    }, []);

    return children

}

export default Router;
