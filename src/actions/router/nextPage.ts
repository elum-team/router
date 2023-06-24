
import { getter, setter } from "elum-state";
import { Sector } from "../../types";
import equal from "../../libs/equal";

import {
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_PARAMS,
  ACTIVE_POPOUT,
  ACTIVE_VIEW,
  context,
  defaultSector
} from "../../atoms";

interface PageOPT extends Sector {
  view: string,
  clear: boolean;
}

type TNextPage = (options: Partial<PageOPT>) => void;

const parts = ["view", "panel", "modal", "popout"];

const nextPage: TNextPage = (options) => {

  if (window.location.protocol !== "file:") {
    window.history.pushState(null, "");
  };

  const currentView = getter(ACTIVE_VIEW);
  const activeView = options["view"] || currentView;

  const isInit = !context[activeView];

  if (isInit) { context[activeView] = [defaultSector] };

  const activeBranch = context[activeView];
  const activeSector = activeBranch[activeBranch.length - 1];

  const newSector: Sector = {
    panel: options["panel"] || activeSector.panel,
    modal: options["modal"] || activeSector.modal,
    popout: options["popout"] || activeSector.popout,
    stay: options["stay"] || defaultSector.stay,
    freeze: options["freeze"] || defaultSector.freeze,
    params: options["params"] || activeSector.params
  };

  for (let i = parts.length - 1; i >= 0; i--) {
    const key = parts[i];
    if (options[key]) { break; };
    newSector[key] = defaultSector[key];
  };

  const isEqual = equal(activeSector, newSector);
  !isEqual && activeBranch.push(newSector);

  if (currentView !== activeView || isInit || !isEqual) {
    setter(ACTIVE_VIEW, activeView);
    setter(ACTIVE_PANEL, newSector["panel"]);
    setter(ACTIVE_MODAL, newSector["modal"]);
    setter(ACTIVE_POPOUT, newSector["popout"]);
    setter(ACTIVE_PARAMS, newSector["params"]);
  };

  if (options.clear && currentView !== activeView) {
    context[currentView] = [defaultSector];
  };

};

export default nextPage;
