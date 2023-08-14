import { getter } from "elum-state";
import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, context } from "../src/atoms";
import { backPage, nextPage } from "../src/index";

export const get = () => ({
  view: getter(ACTIVE_VIEW),
  panel: getter(ACTIVE_PANEL),
  modal: getter(ACTIVE_MODAL),
  popout: getter(ACTIVE_POPOUT),
  params: getter(ACTIVE_PARAMS)
});

export const next_snapshot = (input: any) => {
  nextPage(input)
  return get();
}

export const back_snapshot = (opt?: any) => {
  backPage(opt)
  return get();
}


export const getAll = () => {
  return context
}