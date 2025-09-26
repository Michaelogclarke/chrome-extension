console.log('Service worker loaded and waiting for commands');

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});
