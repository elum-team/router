import { getter } from "elum-state";
import { backPage, hideNotify, nextPage, showNotify } from "../src/index";

import {
  ACTIVE_APP,
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_PARAMS,
  ACTIVE_POPOUT,
  ACTIVE_VIEW,
  context
} from "../src/atoms";

const get = () => ({
  app: getter(ACTIVE_APP),
  view: getter(ACTIVE_VIEW),
  panel: getter(ACTIVE_PANEL),
  modal: getter(ACTIVE_MODAL),
  popout: getter(ACTIVE_POPOUT),
  params: getter(ACTIVE_PARAMS)
});

const next: typeof nextPage = (input) => {
  nextPage(input)
  return get();
}

const back: typeof backPage = (input) => {
  backPage(input)
  return get();
}

test.each([

  /**
  * First entry in router
  */
  ["first", () => {
    expect(next({
      app: "main",
      view: "home",
      stay: "main"
    })).toMatchObject({
      app: "main",
      view: "home",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  /**
   * Check safe entry in router
   */
  ["check", () => {
    expect(get()).toMatchObject({
      app: "main",
      view: "home",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  /**
   * Write next "view" in "app" trees router
   */
  ["next_view", () => {
    expect(next({
      view: "profile"
    })).toMatchObject({
      app: "main",
      view: "profile",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  /**
   * Swap another "app" trees in router
   */
  ["next_app", () => {
    expect(next({
      app: "game",
      view: "home",
      stay: "game"
    })).toMatchObject({
      app: "game",
      view: "home",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  /**
   * 
   */
  ["next_full_snapshot", () => {
    expect(next({
      view: "rating",
      panel: "daily",
      modal: "info",
      popout: "warning",
      params: { type: "error_get_info" }
    })).toMatchObject({
      app: "game",
      view: "rating",
      panel: "daily",
      modal: "info",
      popout: "warning",
      params: { type: "error_get_info" }
    })
  }],

  /**
   * Swap to back "app" trees in router
   */
  ["next_back_app", () => {
    expect(next({
      app: "main"
    })).toMatchObject({
      app: "main",
      view: "profile",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  ["next_panel&freeze", () => {
    expect(next({
      panel: "achievements",
      freeze: true
    })).toMatchObject({
      app: "main",
      view: "profile",
      panel: "achievements",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  ["back_freeze", () => {
    expect(back()).toMatchObject({
      app: "main",
      view: "profile",
      panel: "achievements",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  ["back_ignore_freeze", () => {
    expect(back({
      ignoreFreeze: true
    })).toMatchObject({
      app: "main",
      view: "profile",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }],

  ["back_stay", () => {
    next({
      view: "home",
      panel: "achievements"
    });
    expect(back({ toStay: "main" }))
      .toMatchObject({
        app: "main",
        view: "home",
        panel: "default",
        modal: undefined,
        popout: undefined,
        params: {}
      })
  }],

  ["notify", () => {
    const start = Date.now();
    showNotify("buy", 1000, {}, (data) => {
      expect(data).toMatchObject({ type: "buy", params: {} });
      expect(start > Date.now() - 1100).toBe(true);
    })
  }],

  ["notify_close", () => {
    const start = Date.now();
    showNotify("buy", 0, {}, (data) => {
      expect(data).toMatchObject({ type: "buy", params: {} })
      expect(start > Date.now() - 3100).toBe(true)
    });
    setTimeout(() => { expect(hideNotify()).toBe(true); }, 3000);
  }],

  ["context", () => {
    next({
      app: "game",
      view: "home",
    });
    expect(next({
      app: "main"
    })).toMatchObject({
      app: "main",
      view: "home",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    })
  }]

])("test", (name, func) => {
  func()
})
