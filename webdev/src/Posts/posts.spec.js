import React from "react";
import Posts from "./Posts";
import { BASE_PATH, NEWS, PAGE_HITS, PAGE_PARAM, SEARCH_PARAM, SEARCH_PATH } from "./constants";

const mockJsonPromise = Promise.resolve(({ hits: NEWS, page: 1, nbPages: 10 }));
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

const setUp = () => shallow(<Posts />);

describe('Posts component', () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  })

  it('Render post component', () => {
    expect(component).toMatchSnapshot();
  })

  it('call fetch in componentDidMount', () => {
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${0}`);
  })

  describe('updatePage method', () => {
    it('update state page value', () => {
      instance.updatePage(3);
      expect(component.state().page).toBe(3);
    })

    it('call fetch with given arguments', () => {
      instance.fetchData("", 20, 0);
      expect(global.fetch).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${0}`);
    })
  })

  describe('handlePageChange method', () => {
    it('call updatePage with given arguments', () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue('1') }
      });
      expect(instance.updatePage).toHaveBeenCalledWith(1);
    })

    it('call updatePage with decreased value', () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue('prev') }
      });
      expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE - 1);
    })

    it('call updatePage with increase value', () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue('next') }
      });
      expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE + 1);
    })
  })

  describe('Posts handlers', () => {
    it('handle search input value', () => {
      expect(component.state().searchQuery).toBe('');
      instance.handleInputChange({ target: { value: 'test' } });
      expect(component.state().searchQuery).toBe('test');
    })

    it('handle hits change', () => {
      expect(component.state().hitsPerPage).toBe(20);
      instance.handleHitsChange({ target: { value: String(DEFAULT_PAGE) } });
      expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE);
      expect(component.state().page).toBe(0);
    })

    it('handle change page if "Enter" clicked', () => {
      instance.setState({ page: DEFAULT_PAGE });
      expect(component.state().page).toBe(DEFAULT_PAGE);
      instance.getSearch({ key: 'Enter' });
      expect(component.state().page).toBe(0);
    })

    it('handle not change page if "any keys" clicked', () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: 'any keys' });
      expect(component.state().page).toBe(DEFAULT_PAGE);
    })
  })
})