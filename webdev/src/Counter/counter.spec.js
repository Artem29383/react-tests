import Counter from "./Counter";
import React from "react";

const setUp = () => shallow(<Counter />);

describe('Count component', () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  })

  it('should render Counter component', function () {
    expect(component).toMatchSnapshot();
  });

  describe('Counter handlers', () => {
    it('should changeCount value to plus one', function () {
      const button = component.find('.plusOneBtn');
      button.simulate('click');
      // expect(component).toMatchSnapshot();
      expect(component.state().count).toBe(1);
    });

    it('should reset value to custom value', function () {
      instance.handleReset(33);
      expect(component.state().count).toBe(33);
    });

    it('click on reset button', () => {
      const button = component.find('.resetBtn');
      button.simulate('click');
      expect(component.state().count).toBe(10);
    })
  })
})