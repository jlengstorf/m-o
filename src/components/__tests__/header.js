import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// Test with String Name -> but only local
const nameToTest = 'Isabella'

test('does header name includes the word Isabella', () => {
  expect(nameToTest).toContain('Isabella');
})

// Test with Array -> but only local
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  // expect(new Set(shoppingList)).toContain('beer');
});
