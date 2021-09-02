function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }

    if($(".image-landing-page").attr('src') != "urn_aaid_sc_US_142398be-60e1-4fe3-b17e-75d32ddb1379.png"){
        $(".image-landing-page").attr("src","urn_aaid_sc_US_142398be-60e1-4fe3-b17e-75d32ddb1379.png");
      } else {
        $(".image-landing-page").attr("src","Group%20120.svg");
      }

      if($(".navbar-logo").attr('src') != "Group%20115.png"){
        $(".navbar-logo").attr("src","Group%20115.png");
      } else {
        $(".navbar-logo").attr("src","Group%20115-dark-mode.png");
      }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);

