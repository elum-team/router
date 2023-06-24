import { getter, setter } from "elum-state";
import { ACTIVE_NOTIFY } from "../../atoms";

function hideNotify(type?: string) {
  try {
    const notify = getter(ACTIVE_NOTIFY);
    if (type && notify.type !== type) { return false };

    setter(ACTIVE_NOTIFY, undefined);
    notify.callback({ type: notify.type, params: notify.params });

    return true;
  } catch { return false }
}

export default hideNotify;
