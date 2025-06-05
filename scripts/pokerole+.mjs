import onInit from "./setup.mjs";

Hooks.once("init", async function () {
  // do not log before onInit, because onInit creates a setting used by the log function
  onInit();
});
