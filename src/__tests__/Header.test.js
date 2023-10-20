import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import logoLink from "../constants/logoLink";

// testing logo
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

// testing items in cart
// you have to change cart config in header component in order to test This 

// test("Cart should have 0 items on rendering", () => {
//     const header = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Header />
//         </Provider>
//       </StaticRouter>
//     );
  
//     const numItems = header.getByTestId("num-items-in-cart");
//     expect(numItems.innerHTML).toBe("0");
//   //   console.log(logo);
//   });
  
