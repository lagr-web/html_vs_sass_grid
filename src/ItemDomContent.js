class ItemDomContent {

    constructor(item, parent) {

      this.item = item;
      this.parent = parent; // Brug den eksisterende parent (childContainer)
  
      // Map data keys til render-metoder
      this.renderMap = {
        img: this.renderImage,
        text: this.renderText,
        video: this.renderVideo
        // Du kan tilføje flere metoder som 'title': this.renderTitle osv.
      };
  
      this.render(); // Kald render-metoden for at begynde at tilføje indhold

    }//end constructor
  
    render() {
      for (let key in this.item) { // for-in loop over this item
        if (this.renderMap[key]) {
          this.renderMap[key].call(this, this.item[key]);
        }
      }
    }
  
    renderImage(src) {
      const img = document.createElement('img');
      img.src = `../../assets/${src}`;
      this.parent.appendChild(img); // Brug this.parent (childContainer) direkte
    }
  
    renderText(text) {
      const p = document.createElement('p');
      p.textContent = text;
      this.parent.appendChild(p); // Brug this.parent (childContainer) direkte
    }
  
    renderVideo(filename) {
      const video = document.createElement('video');
      video.controls = true;
      video.src = `../../assets/${filename}`;
      this.parent.appendChild(video); // Brug this.parent (childContainer) direkte
    }

  }//end class
  
  export default ItemDomContent;
  