import Initialize from "./Initialize";
import "../css/style.scss";
import UsingGridWithJson from "./gridjson/UsingGridWithJson";

// **  IIFE: Immediately Invoked Function Expression  */

(function () {

  console.log("starting the cool->app");

  let init = new Initialize();

  new UsingGridWithJson();

  

})();
