export const testRoute = {
  component: () => import("../views/test-component"),
  moreComponents: [() => import("../views/test-component-header")]
};
