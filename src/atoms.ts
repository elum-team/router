import { atom } from "elum-state";
import { Sector } from "./types";

const defaultView = "startup";

const defaultSector: Sector = {
  panel: "default",
  modal: undefined,
  popout: undefined,
  stay: false,
  freeze: false,
  params: {}
}

const context: Record<string, Array<Sector>> = {
  "startup": [defaultSector],
  "error": [defaultSector],
  "main": [defaultSector]
};

const ACTIVE_VIEW = atom<string>({ key: "router_active_view", default: defaultView });
const ACTIVE_PANEL = atom<string>({ key: "router_active_panel", default: defaultSector.panel });
const ACTIVE_MODAL = atom<string>({ key: "router_active_modal", default: defaultSector.modal });
const ACTIVE_POPOUT = atom<string>({ key: "router_active_popout", default: defaultSector.popout });
const ACTIVE_PARAMS = atom<Record<string, string | number>>({ key: "router_active_params", default: defaultSector.params });

export {
  context,
  defaultView,
  defaultSector,
  ACTIVE_VIEW,
  ACTIVE_PANEL,
  ACTIVE_MODAL,
  ACTIVE_POPOUT,
  ACTIVE_PARAMS
}
