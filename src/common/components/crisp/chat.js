export default function initializeChat(){
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.REACT_APP_CRISP_TOKEN || "";
    (function () {
      let d = document;
      let s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
}