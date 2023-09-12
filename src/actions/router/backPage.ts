import { getter, setter } from "elum-state";
import bridge from "@vkontakte/vk-bridge";

import indexStay from "../../libs/indexStay";

import {
  ACTIVE_APP,
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_PARAMS,
  ACTIVE_POPOUT,
  ACTIVE_VIEW,
  context
} from "../../atoms";

const backPage = (opt: Partial<{
  ignoreFreeze: boolean,
  toStay: boolean | string;
}> = {
    ignoreFreeze: false,
    toStay: false
  }) => {

  if (window.location.protocol !== "file:") {
    window.history.pushState(null, "");
  }

  const activeApp = getter(ACTIVE_APP);
  const activeView = getter(ACTIVE_VIEW);
  const activeBranch = context[activeApp][activeView];
  const nextIndex = indexStay(opt.toStay || false, activeBranch);

  if (activeBranch.length === 1) {
    bridge.send("VKWebAppClose", { "status": "success" });
    return;
  };

  const activeSector = activeBranch.at(-1);
  if (activeSector && activeSector.freeze && !opt.ignoreFreeze) { return; };

  setter(ACTIVE_APP, activeApp);
  setter(ACTIVE_VIEW, activeView);
  setter(ACTIVE_PANEL, activeBranch[nextIndex].panel);
  setter(ACTIVE_MODAL, activeBranch[nextIndex].modal);
  setter(ACTIVE_POPOUT, activeBranch[nextIndex].popout);
  setter(ACTIVE_PARAMS, activeBranch[nextIndex].params);

  activeBranch.splice(nextIndex + 1);

};

export default backPage;
