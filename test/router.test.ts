import { context } from "../src/atoms";
import { getter } from "elum-state";
import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_PARAMS, ACTIVE_POPOUT, ACTIVE_VIEW, backPage, nextPage } from "../src";

const get = () => ({
  view: getter(ACTIVE_VIEW),
  panel: getter(ACTIVE_PANEL),
  modal: getter(ACTIVE_MODAL),
  popout: getter(ACTIVE_POPOUT),
  params: getter(ACTIVE_PARAMS)
});

const next_snapshot = (input: any) => {
  nextPage(input)
  return get();
}

const back_snapshot = (opt?: any) => {
  backPage(opt)
  return get();
}

test("next snapshot", () => {

  expect(next_snapshot({
    view: "main",
    panel: "profile",
    params: {
      id: 123
    }
  })).toMatchObject({
    view: "main",
    panel: "profile",
    modal: undefined,
    popout: undefined,
    params: {
      id: 123
    }
  });

});

test("back snapshot", () => {

  expect(back_snapshot())
    .toMatchObject({
      view: "main",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    });

});

test("freeze snapshot", () => {

  expect(next_snapshot({
    view: "main",
    panel: "profile",
    freeze: true,
    params: {
      id: 123
    }
  })).toMatchObject({
    view: "main",
    panel: "profile",
    modal: undefined,
    popout: undefined,
    params: {
      id: 123
    }
  });

  expect(back_snapshot())
    .toMatchObject({
      view: "main",
      panel: "profile",
      modal: undefined,
      popout: undefined,
      params: {
        id: 123
      }
    })

});

test("boolean stay snapshot", () => {

  next_snapshot({
    view: "main",
    panel: "profile",
    params: {
      id: 123
    }
  });

  next_snapshot({
    view: "main",
    panel: "feed",
    stay: "feed"
  })

  next_snapshot({
    view: "main",
    panel: "gallery",
    stay: "gallery"
  })

  next_snapshot({
    view: "main",
    panel: "settings"
  })

  next_snapshot({
    view: "main",
    panel: "settings_theme"
  })

  expect(back_snapshot({
    toStay: true
  }))
    .toMatchObject({
      view: "main",
      panel: "gallery",
      modal: undefined,
      popout: undefined,
      params: {}
    })

  expect(back_snapshot())
    .toMatchObject({
      view: "main",
      panel: "feed",
      modal: undefined,
      popout: undefined,
      params: {}
    })

});

test("string stay snapshot", () => {

  next_snapshot({
    view: "main",
    panel: "profile",
    params: {
      id: 123
    }
  });

  next_snapshot({
    view: "main",
    panel: "feed",
    stay: "feed"
  })

  next_snapshot({
    view: "main",
    panel: "gallery",
    stay: "gallery"
  })

  next_snapshot({
    view: "main",
    panel: "settings"
  })

  next_snapshot({
    view: "main",
    panel: "settings_theme"
  })

  expect(back_snapshot({
    toStay: "feed"
  })).toMatchObject({
    view: "main",
    panel: "feed",
    modal: undefined,
    popout: undefined,
    params: {}
  })

  expect(back_snapshot())
    .toMatchObject({
      view: "main",
      panel: "profile",
      modal: undefined,
      popout: undefined,
      params: {}
    })

});


test("clear snapshot", () => {

  next_snapshot({
    view: "main",
    panel: "profile",
  });

  next_snapshot({
    view: "error"
  });

  const nextBranch = () => {
    next_snapshot({
      view: "error",
      clear: true
    });
    return context["main"];
  }

  expect(nextBranch())
    .toMatchObject([{
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    }])

});
