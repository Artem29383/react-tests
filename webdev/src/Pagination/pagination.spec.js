import React from "react";
import Pagination from "./Pagination";

const props = {
  lastPage: 20,
}

const setUp = () => shallow(<Pagination />);
const setUpProps = () => shallow(<Pagination {...props} />);
const setUpWithProps = () => shallow(<Pagination  {...props} lastPage={20} />);


describe('Posts component', () => {
  let component;
  let componentWithProps;
  let instance;
  let instanceWithProps;

  beforeEach(() => {
    component = setUp();
    componentWithProps = setUpProps();
    instance = component.instance();
    instanceWithProps = componentWithProps.instance();
  })


  it('Render pagination component without Props', () => {
    expect(component).toMatchSnapshot();
  })

  it('Render pagination component with Props', () => {
    expect(componentWithProps).toMatchSnapshot();
  })

  it('Render pagination component for last pages', () => {
    const actualComponent = setUpWithProps({ page: 15 });
    expect(actualComponent).toMatchSnapshot();
  })

  it('Render pagination component without three dots in the middle', () => {
    const actualComponent = setUpWithProps({ page: 16 });
    expect(actualComponent).toMatchSnapshot();
  })

  it('Render pagination component with three dots and three buttons in the end', () => {
    const actualComponent = setUpWithProps({ page: 19 });
    expect(actualComponent).toMatchSnapshot();
  })


  describe('defaultProps', () => {
    it('should use default change', function () {
      const result = Pagination.defaultProps.onClick();
      expect(result).toBe(undefined);
    });
  })
})