import "./style.scss";

//import data from "./data.json";
import data from "./datahaskey.json";
import ItemDomContent from "../ItemDomContent";


class UsingGridWithJson {

  constructor() {

    const parentContainer = document.createElement("main");
    parentContainer.id = "parentContainer";
    document.body.appendChild(parentContainer);

    data.content.forEach((item, index) => {
        
      const childContainer = document.createElement("div");
      childContainer.id = item.id; //id frorm json if needed
      parentContainer.appendChild(childContainer);

      //** start: model 1 simplifiseret eksempel bruger data.json*/

/*  if (item.text && item.text.trim() !== "") {
        const childText = document.createElement("p");
        childText.textContent = item.text;
        childContainer.appendChild(childText);
      }

      if (item.img && item.img.trim() !== "") {

        const childImg = document.createElement("img");
        childImg.src = `../../assets/${item.img}`;
        childContainer.appendChild(childImg);

      }  */

      //** end: model 1 */


 //** start: model 2 simplifiseret eksempel bruger datahaskey.json*/


      /* if (item.hasOwnProperty("img")) {

        const childImg = document.createElement("img");//lytter på om der findes en key "img" i din json
        childImg.src = `../../assets/${item.img}`;
        childContainer.appendChild(childImg);

      } 

      if (item.hasOwnProperty("text")) {//lytter på om der findes en key "text" i din json

        const childText = document.createElement("p");
        childText.textContent = item.text;
        childContainer.appendChild(childText);
        
      } */

       //** end : model 2 */ 

       //**start: model 3 lav en klasse til at styre skidtet "ItemDomContent" */

      const content = new ItemDomContent(item,childContainer);

        //**end: model 3 */

        

    }); //end forEach
  }
}

export default UsingGridWithJson;
