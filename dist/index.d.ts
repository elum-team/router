import * as react from 'react';
import { FC, HTMLAttributes } from 'react';

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
type ParamsData = string | number | boolean | Record<string, any> | any[];

interface PageOPT extends Sector {
    app: string;
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
    app: {
        key: string;
        default: string;
        get: () => string;
        set: (v: any) => void;
        sub: (handle: react.Dispatch<string>) => void;
    };
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
    params: Record<string, ParamsData>;
};
declare const useNotify: UseNotify;

interface IRouter extends HTMLAttributes<HTMLDivElement> {
    app?: string;
    branch: string;
}
declare const Router: FC<IRouter>;

declare const ACTIVE_APP: {
    key: string;
    default: string;
    get: () => string;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<string>) => void;
};
declare const ACTIVE_VIEW: {
    key: string;
    default: string;
    get: () => string;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<string>) => void;
};
declare const ACTIVE_PANEL: {
    key: string;
    default: string;
    get: () => string;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<string>) => void;
};
declare const ACTIVE_MODAL: {
    key: string;
    default: string;
    get: () => string;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<string>) => void;
};
declare const ACTIVE_POPOUT: {
    key: string;
    default: string;
    get: () => string;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<string>) => void;
};
declare const ACTIVE_NOTIFY: {
    key: string;
    default: NOTIFY;
    get: () => NOTIFY;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<NOTIFY>) => void;
};
declare const ACTIVE_PARAMS: {
    key: string;
    default: Record<string, ParamsData>;
    get: () => Record<string, ParamsData>;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<Record<string, ParamsData>>) => void;
};

export { ACTIVE_APP, ACTIVE_MODAL, ACTIVE_NOTIFY, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, Router, backPage, hideNotify, nextPage, showNotify, useNotify, useParams, useRouter };
