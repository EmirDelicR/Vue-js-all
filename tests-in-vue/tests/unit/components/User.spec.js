import { shallowMount } from "@vue/test-utils";
import User from "@/components/User.vue";

describe("User.vue", () => {
  let url = "";
  let data = "";

  const mockHttp = {
    get: (_url, _data) => {
      return new Promise((resolve, reject) => {
        url = _url;
        data = _data;
        resolve();
      });
    }
  };

  it("reveals a notification when submitted", () => {
    const wrapper = shallowMount(User);

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
  });

  it("test and trigger button", () => {
    const wrapper = shallowMount(User);

    expect(wrapper.vm.$data.name).toBe("Test");
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.name).toBe("tseT");
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.name).toBe("Test");
  });

  it("renders odd numbers (testing computed property)", () => {
    expect(User.computed.numbers.call({ even: false })).toBe("1, 3, 5, 7, 9");
    expect(User.computed.numbers.call({ even: true })).toBe("2, 4, 6, 8");
  });

  it("testing methods call in component with async call mock", async () => {
    const wrapper = shallowMount(User, {
      mocks: {
        $http: mockHttp
      }
    });

    wrapper.find("[data-username]").setValue("not alice");
    const forms = wrapper.findAll("form");
    forms.at(1).trigger("submit.prevent");

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, not alice."
    );

    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "not alice" });
  });

  it("testing methods call in component with direct call", async () => {
    expect(User.methods.testDirectCallFromTest({ name: "SOME NAME" })).toBe(
      "some name"
    );
  });

  it("testing mock of i18n component", () => {
    /**
     * https://lmiller1990.github.io/vue-testing-handbook/mocking-global-objects.html#settings-default-mocks-using-config
     */
    const wrapper = shallowMount(User, {
      mocks: {
        $t: msg => msg
      }
    });
    expect(wrapper.vm.getTranslationString("Hello")).toBe("Hello translated!");
  });
});
