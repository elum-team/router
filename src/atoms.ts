import { atom } from "elum-state";
import { NOTIFY, ParamsData, Sector } from "./types";

const defaultSector: Sector = {
  panel: "default",
  modal: undefined,
  popout: undefined,
  stay: false,
  freeze: false,
  params: {}
};

const context: Record<string, {
  __snapshot: Sector[],
  [key: string]: Array<Sector>
}> = {};

const ACTIVE_APP = atom<string>({ key: "router_active_app" });
const ACTIVE_VIEW = atom<string>({ key: "router_active_view" });
const ACTIVE_PANEL = atom<string>({ key: "router_active_panel" });
const ACTIVE_MODAL = atom<string>({ key: "router_active_modal" });
const ACTIVE_POPOUT = atom<string>({ key: "router_active_popout" });
const ACTIVE_NOTIFY = atom<NOTIFY>({ key: "router_active_notify" });
const ACTIVE_PARAMS = atom<Record<string, ParamsData>>({ key: "router_active_params" });

export {

  context,
  defaultSector,

  ACTIVE_APP,
  ACTIVE_VIEW,
  ACTIVE_PANEL,
  ACTIVE_MODAL,
  ACTIVE_POPOUT,
  ACTIVE_NOTIFY,
  ACTIVE_PARAMS,

}
