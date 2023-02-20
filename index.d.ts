import * as react from 'react';

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

type TBackPage = (opt: {
    ignoreFreeze: boolean;
    toStay: boolean | string;
}) => void;
declare const backPage: TBackPage;

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
declare const ACTIVE_PARAMS: {
    key: string;
    default: Record<string, string | number>;
    get: () => Record<string, string | number>;
    set: (v: any) => void;
    sub: (handle: react.Dispatch<Record<string, string | number>>) => void;
};

export { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, backPage, nextPage };
