import { back_snapshot, getAll, next_snapshot } from ".";

test("back", () => {

  next_snapshot({
    app: "test",
    view: "main",
    panel: "profile",
  });

  expect(back_snapshot())
    .toMatchObject({
      view: "main",
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    });

});
