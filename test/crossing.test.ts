import { next_snapshot } from ".";

test("next", () => {

  next_snapshot({
    app: "test",
    view: "main"
  })

  next_snapshot({
    app: "test",
    view: "game",
    panel: "default"
  });

  expect(next_snapshot({
    view: "main"
  })).toMatchObject({
    view: "main",
    panel: "default",
    modal: undefined,
    popout: undefined,
    params: {}
  });

});