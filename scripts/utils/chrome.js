export default () => {
  return new Promise((resolve, reject) => {
    if (!chrome.tabs) {
      resolve('');
    } else {
      chrome.tabs.getSelected((tab) => resolve(tab.url));
    }
  });
}
