import { getter } from "elum-state";
import { backPage, nextPage } from "../src/index";

import {
  ACTIVE_APP,
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_PARAMS,
  ACTIVE_POPOUT,
  ACTIVE_VIEW
} from "../src/atoms";

const get = () => ({
  app: getter(ACTIVE_APP),
  view: getter(ACTIVE_VIEW),
  panel: getter(ACTIVE_PANEL),
  modal: getter(ACTIVE_MODAL),
  popout: getter(ACTIVE_POPOUT),
  params: getter(ACTIVE_PARAMS)
});

const next = (input: any) => {
  nextPage(input)
  return get();
}

const back = (input?: any) => {
  backPage(input)
  return get();
}

test.each([
  ["init", () => {
    expect(next({
      app: "chat",
      view: "main"
    })).toMatchObject({
      app: "chat",
      view: "main",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }]
])("test", (_, func) => {
  func()
})
