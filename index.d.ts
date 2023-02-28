import { FC, HTMLAttributes } from 'react';

type TNextPage = (options: Partial<{
    view: string;
    panel: string;
    modal: string;
    popout: string;
    stay: boolean;
    freeze: boolean;
    clear: boolean;
    params: Record<string, string | number>;
} & Record<string, any>>) => void;
declare const nextPage: TNextPage;

declare const backPage: (opt?: Partial<{
    ignoreFreeze: boolean;
    toStay: boolean | string;
}>) => void;

declare const useParams: () => Record<string, string | number>;

type TAtoms = "view" | "panel" | "modal" | "popout";
declare const useRouter: (atom: TAtoms) => string;

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    branch: string;
}
declare const Router: FC<IRouter>;

export { Router, backPage, nextPage, useParams, useRouter };
