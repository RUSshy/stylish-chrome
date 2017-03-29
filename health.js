'use strict';

setTimeout(healthCheck, 0);

function healthCheck() {
  chrome.runtime.sendMessage({method: 'healthCheck'}, ok => {
    if (ok === undefined) {
      // Chrome is starting up
      healthCheck();
    } else if (!ok && confirm(t('dbError'))) {
      window.open('http://userstyles.org/dberror');
    }
  });
}
