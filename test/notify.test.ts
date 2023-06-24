import { getter } from "elum-state";
import showNotify from "../src/actions/notify/showNotify";

test("notify", () => {

  const start = Date.now();
  showNotify("buy", 1000, {}, (data) => {
    expect(data).toMatchObject({ type: "buy", params: {} });
    expect(start > Date.now() - 1100).toBe(true);
  })

});