import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import logoLink from "../constants/logoLink";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(logoLink);
//   console.log(logo);
});
