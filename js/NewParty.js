// Home




// New Party


// https://codepen.io/aubort/pen/LeBVzW

const themeSelections = [];

const themes = {    // array holding info to be used to populate the cart array when added
  "Eighties": {
      "themeTitle": "80s",
      "imageURL": "Images-NewParty/80s.jpg",
  },
  "Dinner": {
      "themeTitle": "Dinner",
      "imageURL": "Images-NewParty/Dinner.jpg"
  },
  "Hype": {
      "themeTitle": "Hype",
      "imageURL": "Images-NewParty/Hype.jpg"
  },
  "Focus": {
      "themeTitle": "Focus",
      "imageURL": "Images-NewParty/Focus.jpg"
  },
  "Heavy": {
    "themeTitle": "Heavy",
    "imageURL": "Images-NewParty/heavy.png"
},
  "Love": {
    "themeTitle": "Love",
    "imageURL": "Images-NewParty/Love.png"
}
};


class Theme { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(imageURL, themeTitle) {
      this.imageURL = imageURL;
      this.themeTitle = themeTitle;
  }
}


themeSelections.push(new Theme(themes.Eighties.imageURL, themes.Eighties.themeTitle)); 
themeSelections.push(new Theme(themes.Dinner.imageURL, themes.Dinner.themeTitle));
themeSelections.push(new Theme(themes.Hype.imageURL, themes.Hype.themeTitle));// adding the objects
themeSelections.push(new Theme(themes.Focus.imageURL, themes.Focus.themeTitle));   
themeSelections.push(new Theme(themes.Heavy.imageURL, themes.Heavy.themeTitle));      
themeSelections.push(new Theme(themes.Love.imageURL, themes.Love.themeTitle));    




for (const theme of themeSelections) {
  createElement(theme);
}


function createElement(theme) {
  console.log('Creating an Element!')
  const template = document.querySelector('#theme-entry');
  const clone = template.content.cloneNode(true);
  theme.element = clone.querySelector('.section-entry');

  console.log(theme.element);

  // const btnDelete = roll.element.querySelector('.remove');

  // btnDelete.addEventListener('click', () => {
  //     deleteRoll(roll);
  // });

  const themeListElement = document.querySelector('.theme-section');
  themeListElement.prepend(theme.element);

  updateElement(theme);

}

function updateElement(theme) {
  const themeImageElement = theme.element.querySelector('.section-img');
  const themeTitleElement = theme.element.querySelector('.theme-info-title');
 

  themeImageElement.src = theme.imageURL;
  themeTitleElement.innerText = theme.themeTitle;
  
}


// function deleteRoll(roll) {
//   roll.element.remove();
//   cart.delete(roll);
// }

function createTheme(){

    themeName = document.getElementById('Name').value;
    themeSelections.push(new Theme(themes.Heavy.imageURL, themeName));  
    console.log(themeSelections);
    modal.style.display = "none";

}


function createPartyInfo(){

  // themeName = document.getElementById('Name').value;
  // themeSelections.push(new Theme(themes.Heavy.imageURL, themeName));  
  // console.log(themeSelections);
  editDetailsModal.style.display = "none";

}



function invited(plusses) {
    if(plusses.innerHTML == "+"){
        plusses.innerHTML = "Remove";
        plusses.style.fontSize = "12px";
        plusses.style.fontWeight= "bold";
        plusses.style.marginTop="15px";
    }
    else {
        plusses.innerHTML = "+"
        plusses.style.fontSize = "25px";
        plusses.style.marginTop="10px";
        plusses.style.fontWeight= "normal";
    }
  }

  function partyImgHover(img)
  {
    img.src = "Images-NewParty/ChoosePhoto.png"
  }

  function partyImgHoverOut(img)
  {
    img.src = "Images-NewParty/NewParty.png"
  }

  function themeSelected(theme){
    // iterate through all musicType elemenrs and remove selected clas
    const myElements = document.getElementsByClassName("section-entry")

    for (const el of myElements) {
      el.classList.remove("selected")
    }


    theme.classList.toggle("selected");
    theme.classList.remove("hovered")
  }

  function themeHovered(theme){
    if(!theme.classList.contains("selected") ){
      theme.classList.toggle("hovered");
    } 
  }


  // choose theme

  var modal = document.getElementById("createThemeModal");
  var btn = document.getElementById("createThemeBtn");
  var closeModal = document.getElementsByClassName("close-modal")[0];

  var editDetailsModal = document.getElementById("editDetailsModal");
  var editDetailsBtn = document.getElementById("editDetailsBtn");
  var closeEditDetailsModal = document.getElementsByClassName("close-edit-modal")[0];


  btn.onclick = function() {
    modal.style.display = "block";
  }

  editDetailsBtn.onclick = function() {
    editDetailsModal.style.display = "block";
  }

 
  closeModal.onclick = function() {
    modal.style.display = "none";
  }

  closeEditDetailsModal.onclick = function() {
    editDetailsModal.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  window.onclick = function(event) {
    if (event.target == editDetailsModal) {
      editDetailsModal.style.display = "none";
    }
  }

  



