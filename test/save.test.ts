import { next_snapshot } from ".";

test("save params snapshot", () => {

  next_snapshot({
    app: "test",
    view: "main",
    panel: "profile",
    params: { id: 123 }
  });

  next_snapshot({
    panel: "profile"
  });

  expect(next_snapshot({
    panel: "settings"
  }))
    .toMatchObject({
      view: "main",
      panel: "settings",
      modal: undefined,
      popout: undefined,
      params: { id: 123 }
    })

});
