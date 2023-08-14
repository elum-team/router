import { context } from "../src/atoms";
import { next_snapshot } from ".";

test("clear snapshot", () => {

  next_snapshot({
    app: "test",
    view: "main",
    panel: "profile",
  });

  const nextBranch = () => {
    next_snapshot({
      view: "error",
      clear: true
    });
    return context["test"]["main"];
  }

  expect(nextBranch())
    .toMatchObject([{
      panel: "default",
      modal: undefined,
      popout: undefined,
      params: {}
    }])

});
