import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, context } from "../atoms";
import { getter, setter } from "elum-state";
import { Sector } from "../types";
import indexStay from "./indexStay";
import bridge from "@vkontakte/vk-bridge";

type TBackPage = (opt: {
  ignoreFreeze: boolean,
  toStay: boolean | string;
}) => void;

const backPage: TBackPage = (opt = {
  ignoreFreeze: false,
  toStay: false
}) => {

  const activeView = getter(ACTIVE_VIEW);
  const activeBranch = context[activeView];
  const activeSector = activeBranch[activeBranch.length - 1];

  const nextIndex = indexStay(opt.toStay, activeBranch);
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
