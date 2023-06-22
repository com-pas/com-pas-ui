import { OpenSCD } from "@openscd/open-scd/dist/open-scd.js";

const setTheme = (theme: { [key: string]: string }) => {
  Object.keys(theme).forEach((key) => {
    document.querySelector("html")?.style.setProperty(`--${key}`, theme[key]);
  });
};
const theming = (openSCD: OpenSCD) => {
  const css: { [key: string]: string } = JSON.parse(
    localStorage.getItem("oscd-theme") || "{}"
  );

  setTheme(css);

  openSCD.eventBus.addEventListener("oscd-theme", (evt) => {
    const css: { [key: string]: string } = JSON.parse(
      localStorage.getItem("oscd-theme") || "{}"
    );

    setTheme(css);
  });
};

export default theming;
