import equal from "../src/libs/equal"

test.each([

  ["test_equal", () => {
    expect(equal(
      {
        panel: 'default',
        modal: undefined,
        popout: undefined,
        stay: false,
        freeze: false,
        params: {}
      },
      {
        panel: 'default',
        modal: undefined,
        popout: undefined,
        stay: false,
        freeze: false,
        params: {}
      }
    )).toBe(true)
  }],

  ["test_equal", () => {
    expect(equal(
      {
        panel: 'default',
        modal: undefined,
        popout: undefined,
        stay: "home",
        freeze: false,
        params: {}
      },
      {
        panel: 'default',
        modal: undefined,
        popout: undefined,
        stay: false,
        freeze: false,
        params: {}
      },
      ["stay", "freeze"]
    )).toBe(true)
  }],

  ["test_equal", () => {
    expect(equal(
      {
        panel: 'profile',
        modal: undefined,
        popout: undefined,
        stay: false,
        freeze: false,
        params: {}
      },
      {
        panel: 'default',
        modal: undefined,
        popout: undefined,
        stay: false,
        freeze: false,
        params: {}
      }
    )).toBe(false)
  }]

])("equal", (_, func) => { func() })