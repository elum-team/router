import { setter } from "elum-state";
import { ACTIVE_NOTIFY } from "../../atoms";
import { NOTIFY } from "../../types";

function notifyPromise(type: string, time: number, params: Record<string, any>) {
  return new Promise<Omit<NOTIFY, "callback">>((resolve) => {
    const close = () => {
      setter(ACTIVE_NOTIFY, undefined);
      return resolve
    }
    setter(ACTIVE_NOTIFY, { type, params, callback: close });
    if (!time) { return; };
    setTimeout(() => { close()({ type, params }) }, time);
  })
}

function notifyCallback(type: string, time: number, params: Record<string, any>, callback: (value: Omit<NOTIFY, "callback">) => void) {
  const close = () => {
    setter(ACTIVE_NOTIFY, undefined);
    return callback
  }
  setter(ACTIVE_NOTIFY, { type, params, callback: close });
  if (!time) { return; };
  setTimeout(() => { close()({ type, params }) }, time);
}

function showNotify(type: string, time: number, params: Record<string, any>): Promise<Omit<NOTIFY, "callback">>;
function showNotify(type: string, time: number, params: Record<string, any>, callback: (value: Omit<NOTIFY, "callback">) => void): void;
function showNotify(type: string, time: number, params: Record<string, any>, callback?: (value: Omit<NOTIFY, "callback">) => void) {
  return callback ? notifyCallback(type, time, params, callback) : notifyPromise(type, time, params);
}

export default showNotify;
