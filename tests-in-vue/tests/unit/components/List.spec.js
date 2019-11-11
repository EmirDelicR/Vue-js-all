import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";

describe("List.vue", () => {
  let data;
  const items = ["item 1", "item 2"];
  beforeEach(() => {
    data = {
      propsData: { items }
    };
  });

  it("testing component name", () => {
    const wrapper = shallowMount(List, data);
    expect(wrapper.name()).toMatch("list");
  });

  it("renders li for each item in props.items", () => {
    const wrapper = shallowMount(List, data);
    expect(wrapper.findAll("li")).toHaveLength(items.length);
  });

  it("matches snapshot", () => {
    const wrapper = shallowMount(List, data);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("testing if wrapper have div, ul, li elements", () => {
    const wrapper = shallowMount(List, data);
    expect(wrapper.contains("div")).toBe(true);
    expect(wrapper.contains("ul")).toBe(true);
    expect(wrapper.contains("li")).toBe(true);
  });

  it("testing wrapper props", () => {
    const wrapper = shallowMount(List, data);
    expect(wrapper.props().items.length).toBe(2);
    expect(wrapper.props().items[0]).toMatch("item 1");
    expect(wrapper.props().items[1]).toMatch("item 2");
  });

  it("testing wrapper html", () => {
    const wrapper = shallowMount(List, data);
    expect(wrapper.html()).toContain(
      '<ul class="list-cl"><li>item 1</li><li>item 2</li></ul>'
    );

    expect(wrapper.find("li").text()).toMatch("item 1");
  });

  it("testing list attributes (id, class)", () => {
    const wrapper = shallowMount(List, data);
    /** Check attributes */
    expect(wrapper.attributes().id).toBe("some-id");
    expect(wrapper.attributes("id")).toBe("some-id");
    /** Check classes */
    expect(wrapper.attributes().class).toBe("list");
    expect(wrapper.classes()).toContain("list");
    expect(wrapper.classes("list")).toBe(true);
  });
});
