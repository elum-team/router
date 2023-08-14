import { back_snapshot, next_snapshot } from ".";

test("freeze", () => {

  expect(next_snapshot({
    app: "test",
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
