export default class Initialize {
  constructor() {
    document.body.innerHTML += `


<div class="headline">Enkel Grid med 3 kolonner og 2 rækker</div> 
 <div class="grid-1">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<div class="headline">Enkelt Grid med 2 kolonner og 1 række</div> 

<div class="grid-1a">

  <nav>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>

  </nav>
  
  <section>
    <div>headline</div>
    <div>content</div>
  </section>

</div>

<div class="headline">Grid med forskellig kolonnebredder</div> 

<div class="grid-2">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="headline">Grid med kolonne og række, der strækker sig over flere celler</div> 

<div class="grid-3">
  <div>1</div>
  <div class="span">2</div>
  <div>3</div>
  <div>4</div>
   <div>5</div>
</div>

<div class="headline">Fleksibel Grid med 4 kolonner og automatisk tilpasning af rækker</div> 

<div class="grid-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
   <div>10</div> 
</div>

<div class="headline"> Mønstergrid med faste og fleksible kolonner</div> 


<div class="grid-5">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
 `;

    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
  } // END constructor
} // END class
