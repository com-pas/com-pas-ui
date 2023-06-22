const customAddon = openScd => {
  openScd.eventBus.dispatchEvent(new Event('oscd-validate'));
};

export default customAddon;
