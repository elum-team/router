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
  }]
  
])("equal", (name, func) => {
  func()
})