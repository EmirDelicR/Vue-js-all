import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App";

const createConfig = overrides => {
  const mocks = {
    // Vue Router
    $router: {
      push: jest.fn()
    }
  };
  const stubs = ["router-link", "router-view"];
  return Object.assign({ mocks, stubs }, overrides);
};

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
/** TODO FIX testing router */
describe("App-Module-Mock-Router-in-Test", () => {
  test("router called when user clicks router-link", () => {
    const config = createConfig();
    const wrapper = shallowMount(App, config);
    const routerLinks = wrapper.findAll("router-link-stub");
    routerLinks.at(0).trigger("click");
    // console.log(">> ", routerLinks.at(0));
    // console.log(">> ", routerLinks.at(0).trigger("click"));
    const spy = jest.spyOn(config.mocks.$router, "push");
    // expect(spy).toHaveBeenCalledWith("/");
  });
});

describe("App-Module-Mock-Router-in-Test", () => {
  test("router called when user clicks router-link", () => {
    const wrapper = shallowMount(App, { localVue, router });
    const routerLinks = wrapper.findAll("router-link-stub");
    console.log("> ", routerLinks.at(0).props());
    console.log("> ", routerLinks.at(1).props());

    // elem.simulate("click");
    routerLinks.at(0).trigger("click");
    // console.log(">> ", routerLinks.at(0));
    // console.log(">> ", routerLinks.at(0).trigger("click"));
    // const spy = jest.spyOn(router, "push");
    // console.log("> ", spy());
    // expect(spy).toHaveBeenCalledWith("/");
  });
});
