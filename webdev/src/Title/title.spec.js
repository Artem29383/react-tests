import Title from "./Title";
import React from "react";

describe('Title component', () => {
  it('render component title with props', () => {
    const component = shallow(<Title title='Test props' />)
    expect(component).toMatchSnapshot();
  })

  it('render component title without props', () => {
    const component = shallow(<Title />)
    expect(component).toMatchSnapshot();
  })
})