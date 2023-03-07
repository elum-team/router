import { atom } from "elum-state";
import { ParamsData, Sector } from "./types";

const defaultSector: Sector = {
  panel: "default",
  modal: undefined,
  popout: undefined,
  stay: false,
  freeze: false,
  params: {}
};

const context: Record<string, Array<Sector>> = {};

const ACTIVE_VIEW = atom<string>({ key: "router_active_view" });
const ACTIVE_PANEL = atom<string>({ key: "router_active_panel" });
const ACTIVE_MODAL = atom<string>({ key: "router_active_modal" });
const ACTIVE_POPOUT = atom<string>({ key: "router_active_popout" });
const ACTIVE_PARAMS = atom<Record<string, ParamsData>>({ key: "router_active_params" });

export {
  context,
  defaultSector,
  ACTIVE_VIEW,
  ACTIVE_PANEL,
  ACTIVE_MODAL,
  ACTIVE_POPOUT,
  ACTIVE_PARAMS
}
