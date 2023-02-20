import { atom, getter, setter } from 'elum-state';

const defaultView = "startup";
const defaultSector = {
  panel: "default",
  modal: void 0,
  popout: void 0,
  stay: false,
  freeze: false,
  params: {}
};
const context = {
  "startup": [defaultSector],
  "error": [defaultSector],
  "main": [defaultSector]
};
const ACTIVE_VIEW = atom({ key: "router_active_view", default: defaultView });
const ACTIVE_PANEL = atom({ key: "router_active_panel", default: defaultSector.panel });
const ACTIVE_MODAL = atom({ key: "router_active_modal", default: defaultSector.modal });
const ACTIVE_POPOUT = atom({ key: "router_active_popout", default: defaultSector.popout });
const ACTIVE_PARAMS = atom({ key: "router_active_params", default: defaultSector.params });

const equal = (first, second) => Object.keys(first).every(
  (key) => first[key] === second[key] || Object.prototype.toString.call(first[key]) === "[object Object]" && equal(first[key], second[key])
);

const parts = ["view", "panel", "modal", "popout"];
const nextPage = (options) => {
  const activeView = options["view"] || getter(ACTIVE_VIEW);
  const activeBranch = context[activeView];
  const activeSector = activeBranch[activeBranch.length - 1];
  const newSector = {
    panel: options["panel"] || activeSector["panel"],
    modal: options["modal"] || activeSector["modal"],
    popout: options["popout"] || activeSector["popout"],
    stay: options["stay"] || defaultSector["stay"],
    freeze: options["freeze"] || defaultSector["freeze"],
    params: options["params"] || defaultSector["params"]
  };
  for (let i = parts.length - 1; i >= 0; i--) {
    const key = parts[i];
    if (options[key]) {
      break;
    }
    newSector[key] = defaultSector[key];
  }
  if (!equal(activeSector, newSector)) {
    setter(ACTIVE_VIEW, activeView);
    setter(ACTIVE_PANEL, newSector["panel"]);
    setter(ACTIVE_MODAL, newSector["modal"]);
    setter(ACTIVE_POPOUT, newSector["popout"]);
    setter(ACTIVE_PARAMS, newSector["params"]);
    activeBranch.push(newSector);
  }
};

const backPage = () => {
  const activeView = getter(ACTIVE_VIEW);
  const activeBranch = context[activeView];
  const activeSector = activeBranch[activeBranch.length - 2];
  if (!activeSector) {
    console.log("end app");
    return;
  }
  activeBranch.pop();
  const newSector = {
    panel: activeSector["panel"],
    modal: activeSector["modal"],
    popout: activeSector["popout"],
    stay: activeSector["stay"],
    freeze: activeSector["freeze"],
    params: activeSector["params"]
  };
  setter(ACTIVE_VIEW, activeView);
  setter(ACTIVE_PANEL, newSector["panel"]);
  setter(ACTIVE_MODAL, newSector["modal"]);
  setter(ACTIVE_POPOUT, newSector["popout"]);
  setter(ACTIVE_PARAMS, newSector["params"]);
};

export { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, backPage, nextPage };
