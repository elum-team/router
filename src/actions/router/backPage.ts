import { getter, setter } from "elum-state";
import bridge from "@vkontakte/vk-bridge";

import { Sector } from "../../types";
import indexStay from "../../libs/indexStay";

import {
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

  const activeView = getter(ACTIVE_VIEW);
  const activeBranch = context[activeView];
  const activeSector = activeBranch[activeBranch.length - 1];

  const nextIndex = indexStay(opt.toStay || false, activeBranch);
  const nextSector = activeBranch[nextIndex];

  if (activeBranch.length === 1) {
    bridge.send("VKWebAppClose", { "status": "success" });
    return;
  };
  if (activeSector.freeze && !opt.ignoreFreeze) { return; };

  activeBranch.splice(nextIndex + 1);

  const newSector: Sector = {
    panel: nextSector["panel"],
    modal: nextSector["modal"],
    popout: nextSector["popout"],
    stay: nextSector["stay"],
    freeze: nextSector["freeze"],
    params: nextSector["params"]
  };

  setter(ACTIVE_VIEW, activeView);
  setter(ACTIVE_PANEL, newSector["panel"]);
  setter(ACTIVE_MODAL, newSector["modal"]);
  setter(ACTIVE_POPOUT, newSector["popout"]);
  setter(ACTIVE_PARAMS, newSector["params"]);

};

export default backPage;
