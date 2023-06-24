import * as react from 'react';
import { FC, HTMLAttributes } from 'react';
import { ParamsData as ParamsData$1 } from 'types';

type Sector = {
    panel: string;
    modal?: string;
    popout?: string;
    notify?: string;
    stay?: boolean | string;
    freeze?: boolean;
    params: Record<string, ParamsData>;
} & Record<string, any>;
type NOTIFY = {
    type: string;
    params: Record<string, ParamsData>;
    callback: (value: Omit<NOTIFY, "callback"> | PromiseLike<Omit<NOTIFY, "callback">>) => void;
};
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

declare function showNotify(type: string, time: number, params: Record<string, any>): Promise<Omit<NOTIFY, "callback">>;
declare function showNotify(type: string, time: number, params: Record<string, any>, callback: (value: Omit<NOTIFY, "callback">) => void): void;

declare function hideNotify(type?: string): boolean;

declare const useParams: <T extends Record<string, ParamsData>>() => T;

declare const listAtom: {
    view: {
        key: string;
        default: string;
        get: () => string;
        set: (v: any) => void;
        sub: (handle: react.Dispatch<string>) => void;
    };
    panel: {
        key: string;
        default: string;
        get: () => string;
        set: (v: any) => void;
        sub: (handle: react.Dispatch<string>) => void;
    };
    modal: {
        key: string;
        default: string;
        get: () => string;
        set: (v: any) => void;
        sub: (handle: react.Dispatch<string>) => void;
    };
    popout: {
        key: string;
        default: string;
        get: () => string;
        set: (v: any) => void;
        sub: (handle: react.Dispatch<string>) => void;
    };
};
declare const useRouter: (atom: keyof typeof listAtom) => string;

type UseNotify = () => {
    type?: string;
    params: Record<string, ParamsData$1>;
};
declare const useNotify: UseNotify;

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    branch: string;
}
declare const Router: FC<IRouter>;

export { Router, backPage, hideNotify, nextPage, showNotify, useNotify, useParams, useRouter };
