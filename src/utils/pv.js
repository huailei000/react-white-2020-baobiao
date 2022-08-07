/* eslint-disable eqeqeq */
function getCookie(name) {
  try {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  } catch (error) {
    return undefined;
  }
}

function loadScript(src, callback) {
  const script = document.createElement('script');
  const head = document.getElementsByTagName('head')[0];
  script.type = 'text/javascript';
  script.src = src;
  if (script.addEventListener) {
    script.addEventListener('load', () => {
      callback();
    }, false);
  } else if (script.attachEvent) {
    script.attachEvent('onreadystatechange', () => {
      const target = window.event.srcElement;
      if (target.readyState == 'loaded') {
        callback();
      }
    });
  }
  head.appendChild(script);
}

function report(channel) {
  const reportParam = `page=channel&qudao=${channel}&pac_uid=${getCookie('pac_uid') || ''}&_dc=${ Math.random()}`;
  const gbtraceBOSS = new Image(1, 1);
  gbtraceBOSS.src = `https://btrace.qq.com/kvcollect?BossId=4787&Pwd=1286385847&${reportParam}`;
  console.log(channel);
}

export function reportBossPv(channel) {
  if (getCookie('pac_uid')) {
    report(channel);
  } else {
    loadScript('//pacaio.match.qq.com/stat/only?callback=isNaN', () => {
      report(channel);
    });
  }
}

export function reportClick(channel) {
  const reportParam = `pagetype=function&page=activity&qudao=${channel}&modular=whitepage_down&fun=down&pac_uid=${getCookie('pac_uid') || ''}&_dc=${ Math.random()}`;
  const gbtraceBOSS = new Image(1, 1);
  gbtraceBOSS.src = `https://btrace.qq.com/kvcollect?BossId=4919&Pwd=187500179&${reportParam}`;
}