import React from "react";
import Post from "./post";

const setUp = (props) => shallow(<Post {...props} />);

describe('render Post component', () => {
  let component;

  beforeEach(() => {
    component = setUp()
  })

  it("component contains <Post>", () => {
    const wrapper = component.find('.post');
    expect(wrapper.length).toBe(1);
  });

  it("Post component contains <a />", () => {
    const wrapper = component.find('a');
    expect(wrapper.length).toBe(1);
  });

  it("Render created date", () => {
    const createdAt = "01-03-2020";
    component = setUp({ created_at: createdAt });
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(createdAt).toLocaleDateString());
  });
});