import { back_snapshot, next_snapshot } from ".";

test("stay_boolean", () => {

  next_snapshot({
    app: "test",
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