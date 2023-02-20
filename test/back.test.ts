import { back_snapshot, next_snapshot } from ".";

test("back", () => {

  next_snapshot({
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
