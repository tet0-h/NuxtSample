import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from "~/app.vue";

describe("App.vue", () => {
  it("renders NuxtRouteAnnouncer and NuxtWelcome components", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent({ name: "NuxtRouteAnnouncer" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "NuxtWelcome" }).exists()).toBe(false);
  });
});
