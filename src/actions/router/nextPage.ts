import { getter, setter } from "elum-state";
import { Sector } from "../../types";

import {
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_PARAMS,
  ACTIVE_POPOUT,
  ACTIVE_VIEW,
  ACTIVE_APP,
  context,
  defaultSector
} from "../../atoms";

import equal, { Keys } from "../../libs/equal";

interface PageOPT extends Sector {
  app: string;
  view: string,
  clear: boolean;
}

type TNextPage = (options: Partial<PageOPT>, exclude?: Keys[]) => void;

// const parts: Array<keyof Partial<PageOPT>> = ["app", "view", "panel", "modal", "popout"];
const parts: Array<keyof Partial<PageOPT>> = ["popout", "modal", "panel",];

const nextPage: TNextPage = (options, exclude) => {

  if (window.location.protocol !== "file:") {
    window.history.pushState(null, "");
  };

  const currentApp = getter(ACTIVE_APP);
  const optionsApp = options.app;
  const activeApp = optionsApp || currentApp;

  const isShift = !!(optionsApp && optionsApp !== currentApp);
  const snapshot = context[activeApp]?.__snapshot;

  const currentView = (isShift && Array.isArray(snapshot)) ? snapshot[0].view : getter(ACTIVE_VIEW);
  const activeView = options.view || currentView;

  const isInit = !context[activeApp]?.[activeView];

  if (isInit) {
    if (!context[activeApp]) {
      context[activeApp] = { __snapshot: [] }
    }
    if (!context[activeApp][activeView]) {
      context[activeApp][activeView] = [defaultSector]
    }
  }

  if (!Array.isArray(context[activeApp]?.__snapshot)) {
    context[activeApp!].__snapshot = []
  }

  const sector: Sector = (isShift && Array.isArray(snapshot)) ?
    snapshot[0] :
    context[activeApp][activeView].at(-1)!;

  const newSector: Sector = {
    panel: options.panel || sector.panel,
    modal: options.modal || sector.modal,
    popout: options.popout || sector.popout,
    stay: options.stay || defaultSector.stay,
    freeze: options.freeze || defaultSector.freeze,
    params: options.params || sector.params
  };

  if (!isShift) {
    for (let key of parts) {
      if (options[key]) { break; };
      newSector[key] = defaultSector[key];
    }
  }

  const isEqual = equal(context[activeApp][activeView].at(-1), newSector, exclude || []);
  if (!isEqual) { context[activeApp][activeView].push(newSector); }

  context[activeApp].__snapshot = [{
    view: activeView,
    ...newSector
  }];

  setter(ACTIVE_APP, activeApp);
  setter(ACTIVE_VIEW, activeView);
  setter(ACTIVE_PANEL, newSector.panel);
  setter(ACTIVE_MODAL, newSector.modal);
  setter(ACTIVE_POPOUT, newSector.popout);
  setter(ACTIVE_PARAMS, newSector.params);

  if (options.clear && currentView !== activeView) {
    context[activeApp].__snapshot = [defaultSector];
    context[activeApp][currentView] = [defaultSector];
  };

}

export default nextPage;
