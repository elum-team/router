import { next_snapshot } from ".";

test("next", () => {

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