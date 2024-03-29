import * as elum_state from 'elum-state';
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

type Keys = "stay" | "freeze" | "params" | string;

interface PageOPT extends Sector {
    app: string;
    view: string;
    clear: boolean;
}
type TNextPage = (options: Partial<PageOPT>, exclude?: Keys[]) => void;
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
    app: elum_state.GlobalAtom<string>;
    view: elum_state.GlobalAtom<string>;
    panel: elum_state.GlobalAtom<string>;
    modal: elum_state.GlobalAtom<string>;
    popout: elum_state.GlobalAtom<string>;
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

declare const ACTIVE_APP: elum_state.GlobalAtom<string>;
declare const ACTIVE_VIEW: elum_state.GlobalAtom<string>;
declare const ACTIVE_PANEL: elum_state.GlobalAtom<string>;
declare const ACTIVE_MODAL: elum_state.GlobalAtom<string>;
declare const ACTIVE_POPOUT: elum_state.GlobalAtom<string>;
declare const ACTIVE_NOTIFY: elum_state.GlobalAtom<NOTIFY>;
declare const ACTIVE_PARAMS: elum_state.GlobalAtom<Record<string, ParamsData>>;

export { ACTIVE_APP, ACTIVE_MODAL, ACTIVE_NOTIFY, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, Router, backPage, hideNotify, nextPage, showNotify, useNotify, useParams, useRouter };
