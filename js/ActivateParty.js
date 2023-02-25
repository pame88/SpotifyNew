// Home




// New Party


// https://codepen.io/aubort/pen/LeBVzW

const members = [];
const friends = [];

const memberProfiles  = {    // array holding info to be used to populate the cart array when added
  "David": {
      "memberName": "David",
      "imageURL": "Images-ActivateParty/David.png",
  },
  "Raye": {
    "memberName": "Raye",
    "imageURL": "Images-ActivateParty/Raye.png" ,
},
  "Danielle": {
    "memberName": "Danielle",
    "imageURL": "Images-NewParty/Danielle.png",
},
  "Mike": {
    "memberName": "Mike",
    "imageURL": "Images-ActivateParty/Mike.png",
},
  "Vince": {
    "memberName": "Vince",
    "imageURL": "Images-ActivateParty/Vince.png",
},
  "Jason": {
    "memberName": "Jason",
    "imageURL": "Images-NewParty/Jason.png",
},
  "Marta": {
    "memberName": "Marta",
    "imageURL": "Images-NewParty/Marta.png",
},
 
};

const inviteProfiles  = {
  "Ahmed": {
    "name": "Ahmed",
    "imageURL": "Images-Party/Ahmed.png",
  },
  "Tim": {
    "name": "Tim",
    "imageURL": "Images-NewParty/Tim.png",
  },
  "Amelia": {
    "name": "Amelia",
    "imageURL": "Images-NewParty/Amelia.png",
  },
  "Francesca": {
    "name": "Francesca",
    "imageURL": "Images-newParty/Francesca.png",
  },
  "Matt": {
    "name": "Matt",
    "imageURL": "Images-NewParty/Matt.png",
  },
  "Ricardo": {
    "name": "Ricardo",
    "imageURL": "Images-ActivateParty/Ricardo.png",
  },
  "Eddie": {
    "name": "Eddie",
    "imageURL": "Images-NewParty/Eddie.png",
  },

}

class memberProfile { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(imageURL, memberName) {
      this.imageURL = imageURL;
      this.memberName = memberName;
  }
}

class friendProfile { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(imageURL, name) {
      this.imageURL = imageURL;
      this.name = name;
  }
}


members.push(new memberProfile(memberProfiles.David.imageURL, memberProfiles.David.memberName)); 
members.push(new memberProfile(memberProfiles.Raye.imageURL, memberProfiles.Raye.memberName)); 
members.push(new memberProfile(memberProfiles.Danielle.imageURL, memberProfiles.Danielle.memberName)); 
members.push(new memberProfile(memberProfiles.Mike.imageURL, memberProfiles.Mike.memberName)); 
members.push(new memberProfile(memberProfiles.Vince.imageURL, memberProfiles.Vince.memberName)); 
members.push(new memberProfile(memberProfiles.Jason.imageURL, memberProfiles.Jason.memberName)); 
members.push(new memberProfile(memberProfiles.Marta.imageURL, memberProfiles.Marta.memberName)); 



for (const member of members) {
  createElement(member);
}


function createElement(member) {
  const template = document.querySelector('#member-entry');
  const clone = template.content.cloneNode(true);
  member.element = clone.querySelector('.quick-invite');


  // const btnDelete = roll.element.querySelector('.remove');

  // btnDelete.addEventListener('click', () => {
  //     deleteRoll(roll);
  // });

  const memberListElement = document.querySelector('#member-section');
  memberListElement.prepend(member.element);

  updateElement(member);

}

function updateElement(member) {
  const memberImageElement = member.element.querySelector('.quick-invite-img');
  const memberTitleElement = member.element.querySelector('.quick-invite-name');
 

  memberImageElement.src = member.imageURL;
  memberTitleElement.innerText = member.memberName;
  
}


function removeMember(member) {
  members = members.filter(n => n !== member);
}

// friends.push(new friendProfile(inviteProfiles.Ahmed.imageURL, inviteProfiles.Ahmed.name)); 
// friends.push(new friendProfile(inviteProfiles.Tim.imageURL, inviteProfiles.Tim.name)); 
// friends.push(new friendProfile(inviteProfiles.Amelia.imageURL, inviteProfiles.Amelia.name)); 
// friends.push(new friendProfile(inviteProfiles.Francesca.imageURL, inviteProfiles.Francesca.name)); 
// friends.push(new friendProfile(inviteProfiles.Matt.imageURL, inviteProfiles.Matt.name)); 
// friends.push(new friendProfile(inviteProfiles.Ricardo.imageURL, inviteProfiles.Ricardo.name)); 
// friends.push(new friendProfile(inviteProfiles.Eddie.imageURL, inviteProfiles.Eddie.name)); 




// for (const friend of friends) {
//   createElement(friend);
// }


// function createElement(friend) {
//   const template = document.querySelector('#friend-entry');
//   const clone = template.content.cloneNode(true);
//   friend.element = clone.querySelector('.quick-invite');


//   // const btnDelete = roll.element.querySelector('.remove');

//   // btnDelete.addEventListener('click', () => {
//   //     deleteRoll(roll);
//   // });

//   const friendListElement = document.querySelector('#friend-section');
//   friendListElement.prepend(friend.element);

//   updateElement(friend);

// }

// function updateElement(friend) {
//   const friendImageElement = friend.element.querySelector('.quick-invite-img');
//   const friendTitleElement = friend.element.querySelector('.quick-invite-name');
 

//   friendImageElement.src = friend.imageURL;
//   friendTitleElement.innerText = friend.name;
  
// }



// // function invite(){
// //     members.push(new Theme(friends.this.imageURL, themeName));  
// //     // console.log(themeSelections);
// // }




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

 
 


 

  



