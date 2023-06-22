const setTheme = (theme) => {
    Object.keys(theme).forEach((key) => {
        var _a;
        (_a = document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.style.setProperty(`--${key}`, theme[key]);
    });
};
const theming = (openSCD) => {
    const css = JSON.parse(localStorage.getItem("oscd-theme") || "{}");
    setTheme(css);
    openSCD.eventBus.addEventListener("oscd-theme", (evt) => {
        const css = JSON.parse(localStorage.getItem("oscd-theme") || "{}");
        setTheme(css);
    });
};
export default theming;
//# sourceMappingURL=theming.js.map