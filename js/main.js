document.addEventListener("DOMContentLoaded", function () {
  var heightHeader = document.querySelector(".header").offsetHeight;
  console.log(heightHeader);
  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;
    },
    //
    start: function () {
      // su ly cac su kien
      this.handleEvent();
    },
  };
  app.start();
});
