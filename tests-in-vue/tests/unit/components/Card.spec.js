import { mount, createLocalVue } from "@vue/test-utils";
import axios from "axios";
import Vuex from "vuex";
import Card from "@/components/Card.vue";
import StoreFactory from "../../testUtils/factory";
import mutations from "@/store/Card/mutations";
import storeActions from "@/store/Card/actions";
import getters from "@/store/Card/getters";

/** Create local vue instance */
const localVue = createLocalVue();
/** Use vuex */
localVue.use(Vuex);

/** Mock incrementTotal function */
const actions = {
  incrementTotal: jest.fn()
};

describe("Card-Module-Mock-Store-in-Test", () => {
  let store;
  beforeEach(() => {
    /** Mocking store (one way)*/
    store = new Vuex.Store({
      modules: {
        Card: {
          namespaced: true,
          actions,
          getters: {
            projectId: () => 4,
            currentTotal: () => 789
          }
        }
      }
    });
  });
  test("card should show correct total", () => {
    const wrapper = mount(Card, { store, localVue });
    expect(wrapper.vm.currentTotal).toEqual(789);
  });
});

describe("Card-Module-Mock-Store-From-Utils", () => {
  let store;
  beforeEach(() => {
    store = StoreFactory(
      {
        Card: {
          projectId: 3,
          currentTotal: 567
        }
      },
      actions
    );
  });

  /** Make a snapshot for component to match */
  test("should render content correctly", () => {
    const wrapper = mount(Card, { store, localVue });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  /** Testing some method from Card component */
  test("addNumbers should add numbers together", () => {
    const wrapper = mount(Card, { store, localVue });
    expect(wrapper.vm.addNumbers(1, 2)).toEqual(3);
  });

  /** Testing computed property from Card Module */
  test("getText should evaluate foo correctly", () => {
    const wrapper = mount(Card, { store, localVue });
    wrapper.setData({
      foo: "This"
    });
    expect(wrapper.vm.getText).toEqual("This is Sparta");
  });

  test("card should show correct total", () => {
    const wrapper = mount(Card, { store, localVue });
    expect(wrapper.vm.currentTotal).toEqual(567);
  });

  test("card should show correct project id", () => {
    const wrapper = mount(Card, { store, localVue });
    expect(wrapper.vm.projectId).toEqual(3);
  });
});

describe("Card-Module-Test-Store-Mutations", () => {
  let state;
  beforeEach(() => {
    state = {
      currentTotal: 0,
      projectId: null
    };
  });

  it("Test Update project total mutation ", () => {
    mutations.UPDATE_TOTAL(state, 59);

    expect(state).toEqual({
      currentTotal: 59,
      projectId: null
    });
  });

  it("Test Update project ID mutation ", () => {
    mutations.UPDATE_PROJECT_ID(state, 10);

    expect(state).toEqual({
      currentTotal: 0,
      projectId: 10
    });
  });
});

describe("Card-Module-Test-Store-Actions", () => {
  const commit = jest.fn();
  const username = "alice";
  const password = "password";

  jest.mock("axios");

  it("Test authenticate and mock axios in actions: ", async () => {
    await storeActions.authenticate({ commit }, { username, password });

    const data = await axios.get();

    expect(data.url).toBe("/api/authenticate");
    expect(data.body).toEqual({ username, password });
    expect(commit).toHaveBeenCalledWith("SET_AUTHENTICATED", true);
  });
});

describe("Card-Module-Test-Store-Getters", () => {
  let state;
  beforeEach(() => {
    state = {
      currentTotal: 36,
      projectId: 12
    };
  });

  it("Test Card currentTotal getter  ", () => {
    const currentTotal = getters.currentTotal(state);
    expect(currentTotal).toEqual(36);
  });

  it("Test Card projectId getter  ", () => {
    const projectId = getters.projectId(state);
    expect(projectId).toEqual(12);
  });
});
