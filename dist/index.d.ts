import { FC, HTMLAttributes } from 'react';

type Sector = {
    panel: string;
    modal?: string;
    popout?: string;
    stay?: boolean | string;
    freeze?: boolean;
    params: Record<string, ParamsData>;
} & Record<string, any>;
type ParamsData = string | number | boolean;

interface PageOPT extends Sector {
    view: string;
    clear: boolean;
}
type TNextPage = (options: Partial<PageOPT>) => void;
declare const nextPage: TNextPage;

declare const backPage: (opt?: Partial<{
    ignoreFreeze: boolean;
    toStay: boolean | string;
}>) => void;

declare const useParams: <T extends Record<string, ParamsData>>() => T;

type TAtoms = "view" | "panel" | "modal" | "popout";
declare const useRouter: (atom: TAtoms) => string;

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    branch: string;
}
declare const Router: FC<IRouter>;

export { Router, backPage, nextPage, useParams, useRouter };
