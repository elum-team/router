import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, context, defaultSector } from "../atoms";
import { getter, setter } from "elum-state";
import { Sector } from "../types";
import equal from "./equal";

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

const parts = ["view", "panel", "modal", "popout"];

const nextPage: TNextPage = (options) => {

  const currentView = getter(ACTIVE_VIEW);
  const activeView = options["view"] || currentView;
  const activeBranch = context[activeView];
  const activeSector = activeBranch[activeBranch.length - 1];

  const newSector: Sector = {
    panel: options["panel"] || activeSector["panel"],
    modal: options["modal"] || activeSector["modal"],
    popout: options["popout"] || activeSector["popout"],
    stay: options["stay"] || defaultSector["stay"],
    freeze: options["freeze"] || defaultSector["freeze"],
    params: options["params"] || activeSector["params"]
  };

  for (let i = parts.length - 1; i >= 0; i--) {
    const key = parts[i];
    if (options[key]) { break; };
    newSector[key] = defaultSector[key];
  }

  if (!equal(activeSector, newSector)) {

    if (options.clear && currentView !== activeView) {
      context[currentView] = [defaultSector];
    }

    setter(ACTIVE_VIEW, activeView);
    setter(ACTIVE_PANEL, newSector["panel"]);
    setter(ACTIVE_MODAL, newSector["modal"]);
    setter(ACTIVE_POPOUT, newSector["popout"]);
    setter(ACTIVE_PARAMS, newSector["params"]);
    activeBranch.push(newSector);
    
  }

};

export default nextPage;
