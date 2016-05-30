export default () => {
  return new Promise((resolve, reject) => {
    if (!chrome.tabs) {
      resolve('http://www.bbc.co.uk/iplayer');
    } else {
      chrome.tabs.getSelected((tab) => resolve(tab.url));
    }
  });
}
