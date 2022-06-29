import { SearchStoreService } from '../../src/services/SearchStoreService.js'

jest.mock('../../src/services/SearchStoreService.js', () => ({
  ...(jest.requireActual('../../src/services/SearchStoreService.js')),
  otherFn: jest.fn()
}))

describe('search service should not return results on empty result', () => {
  it('renders props.msg when passed', () => {
    let results = SearchStoreService([], "test");
    expect([]).toEqual(results);
  })
})

describe('search service should not return results when there are no matches', () => {
  it('renders props.msg when passed', () => {
    let dummy_data = [{
      "addressName":"Jumbo",
    }]
    let results = SearchStoreService(dummy_data, "test");
    expect([]).toEqual(results);
  })
})

describe('search service should return results when there are matches', () => {
  it('renders props.msg when passed', () => {
    let dummy_data = [{
      "addressName":"Jumbo",
    }]
    let results = SearchStoreService(dummy_data, "Jumbo");
    expect([{"addressName":"Jumbo",}]).toEqual(results);
  })
})

describe('search service should return results when there are partial matches', () => {
  it('renders props.msg when passed', () => {
    let dummy_data = [{
      "addressName":"Jumbo Veghel",
    }]
    let results = SearchStoreService(dummy_data, "Jumbo");
    expect([{"addressName":"Jumbo Veghel",}]).toEqual(results);
    results = SearchStoreService(dummy_data, "Veghel");
    expect([{"addressName":"Jumbo Veghel",}]).toEqual(results);
  })
})