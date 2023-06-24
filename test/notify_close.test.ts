import hideNotify from "../src/actions/notify/hideNotify";
import showNotify from "../src/actions/notify/showNotify";

test("notify_close", () => {

  const start = Date.now();
  showNotify("buy", 0, {}, (data) => {
    expect(data).toMatchObject({ type: "buy", params: {} })
    expect(start > Date.now() - 3100).toBe(true)
  });

  setTimeout(() => { expect(hideNotify()).toBe(true); }, 3000);

});