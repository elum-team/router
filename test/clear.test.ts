import { context } from "../src/atoms";
import { next_snapshot } from ".";

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
