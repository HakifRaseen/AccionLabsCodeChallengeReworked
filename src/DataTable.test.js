import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DataTable from "./DataTable";

Enzyme.configure({ adapter: new Adapter() });

//toMatchSnapshot() is not working in codesandbox
// it("DataTable Rendering", () => {
//   const wrapper = shallow(<DataTable />);
//   expect(wrapper).toMatchSnapshot();
// });

it("DataTable Rendering", () => {
  const wrapper = mount(<DataTable />);
  expect(wrapper).toHaveLength(1);
});

it("DataTable Pagination", () => {
  const wrapper = mount(<DataTable />);
  expect(
    wrapper
      .find("button")
      .at(0)
      .props().children
  ).toBe("Previous");
  expect(
    wrapper
      .find("button")
      .at(1)
      .props().children
  ).toBe("Next");
});
