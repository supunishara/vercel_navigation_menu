"use client";

import ShiftingDropDown from "./ShiftingDrownDown";
import AnimatedSideBar from "./AnimatedSideBar";
import { store } from "../app/redux/Store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        {/* <ShiftingDropDown /> */}
        <AnimatedSideBar />
      </Provider>
    </main>
  );
}
