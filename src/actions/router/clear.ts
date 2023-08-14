import { setter } from "elum-state";
import {
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_PARAMS,
  ACTIVE_POPOUT,
  ACTIVE_VIEW,
  ACTIVE_APP,
  context
} from "../../atoms";

const clear = () => {
  const keys = Object.keys(context);
  for (let item of keys) {
    delete context[item]
  }

  setter(ACTIVE_APP, undefined);
  setter(ACTIVE_VIEW, undefined);
  setter(ACTIVE_PANEL, undefined);
  setter(ACTIVE_MODAL, undefined);
  setter(ACTIVE_POPOUT, undefined);
  setter(ACTIVE_PARAMS, undefined);

}

export default clear;
