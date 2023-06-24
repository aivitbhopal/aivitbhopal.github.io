// This contains the cart menu interactions and animations

const speakerDetails = [
  {
    id: 1,
    session: "KEYNOTE 01",
    mode: "Offline",
    img: "./img/amitabhtewari.jpeg",
    name: "Amitabh Tewari",
    time: "&nbsp; Day-1, 9:30am - 12:00pm",
    detail: "Center Head at TCS",
    linkedIn: "http://linkedin.com/in/amitabhtewari",
    topic: "Inaugural Speech",
    price: 50
  },
  {
    id: 2,
    session: "KEYNOTE 02",
    mode: "Offline",
    img: "./img/rahulmishra.jpeg",
    name: "Rahul Mishra",
    time: "&nbsp; Day-1, 3:00 pm - 4:30 pm",
    detail: "Head of Growth - Concept Campus<br>(India & Canada)",
    linkedIn: "https://www.linkedin.com/in/rahulmishracc",
    topic: "Discussion & Analysis of AI Powered HRTech Product Startup Scenarios",
    price: 50
  },
  {
    id: 3,
    session: "KEYNOTE 01",
    mode: "Offline",
    img: "./img/amitabhtewari.jpeg",
    name: "Amitabh Tewari",
    time: "&nbsp; Day-1, 9:30am - 12:00pm",
    detail: "Center Head at TCS",
    linkedIn: "http://linkedin.com/in/amitabhtewari",
    topic: "Inaugural Speech",
    price: 50
  },
  {
    id: 4,
    session: "KEYNOTE 02",
    mode: "Offline",
    img: "./img/rahulmishra.jpeg",
    name: "Rahul Mishra",
    time: "&nbsp; Day-1, 3:00 pm - 4:30 pm",
    detail: "Head of Growth - Concept Campus<br>(India & Canada)",
    linkedIn: "https://www.linkedin.com/in/rahulmishracc",
    topic: "Discussion & Analysis of AI Powered HRTech Product Startup Scenarios",
    price: 50
  },
  {
    id: 5,
    session: "KEYNOTE 01",
    mode: "Offline",
    img: "./img/amitabhtewari.jpeg",
    name: "Amitabh Tewari",
    time: "&nbsp; Day-1, 9:30am - 12:00pm",
    detail: "Center Head at TCS",
    linkedIn: "http://linkedin.com/in/amitabhtewari",
    topic: "Inaugural Speech",
    price: 50
  },
  {
    id: 6,
    session: "KEYNOTE 02",
    mode: "Offline",
    img: "./img/rahulmishra.jpeg",
    name: "Rahul Mishra",
    time: "&nbsp; Day-1, 3:00 pm - 4:30 pm",
    detail: "Head of Growth - Concept Campus<br>(India & Canada)",
    linkedIn: "https://www.linkedin.com/in/rahulmishracc",
    topic: "Discussion & Analysis of AI Powered HRTech Product Startup Scenarios",
    price: 50
  }
]

const eventCombos = [
  {
    id: 7,
    name: "Artificial Intelligence",
    card_ids: [1,2],
    discount: 0.3
  },
  {
    id: 8,
    name: "Deep Learning",
    card_ids: [3,4],
    discount: 0.4
  }
]

// Single Card Component
function hydrateCards ( props ) {
  return `
  <div id="${props.id}" class="speaker-container margin-bottom">
    <div class="card-top">
      <span class="pro">${props.session}</span>
      <h2>${props.mode}</h2>
    </div>
    <img class="round" src="${props.img}" alt="user" />
    <h3>Amitabh Tewari</h3>
    <h6><i class="fa-solid fa-clock"></i>${props.time}</h6>
    <p>${props.detail}</p>
    <div class="buttons">
      <a href="${props.linkedIn}">
        <button><i class="fa fa-linkedin"></i></button></a>
      <br>
      <br>
      </a>
      <button id="addCart" class="primary">
        Add to Cart
      </button>
      <!-- <button class="primary ghost">
        Following
      </button> -->
    </div>
    <div class="skills">
      <h6>Topic</h6>
      <ul>
        <li>${props.topic}</li>
      </ul>
    </div>
  </div>
  `
}

let discount = 0;

// Array of selected events get injected in the order-table div ( needs to rerender the div each time there is updatation in the order )
function hydrateCart ( props ) {

  let items = "";
  let totalPrice = 0;

  props.forEach((elem, idx)=> {
    items += `
    <div class="order-row">
      <div class="serial-no">
        <div>${idx+1}</div>
      </div>
      <div class="event-name">
        <div>${elem.topic}</div>
      </div>
      <div class="price">
        <div>${elem.price}</div>
      </div>
    </div>
    `
    totalPrice += elem.price;
  });

  discountPrice = totalPrice * discount

  totalPrice -= discountPrice

  return `
  <div class="order-row col-head">
    <div class="serial-no">
      <div>S.No.</div>
    </div>
    <div class="event-name">
      <div>Event Name</div>
    </div>
    <div class="price">
      <div>Price</div>
    </div>
  </div>
  ${items}
  <div class="order-row">
    <div class="serial-no">
      <div></div>
    </div>
    <div class="event-name total-price">
      <div>Discount:</div>
    </div>
    <div class="price">
      <div>-${Math.ceil(discountPrice)}</div>
    </div>
  </div>
  <div class="order-row">
    <div class="serial-no">
      <div></div>
    </div>
    <div class="event-name total-price">
      <div>Total Price:</div>
    </div>
    <div class="price">
      <div>${totalPrice}</div>
    </div>
  </div>
  `;
}

function hydrateComboCard ( props ) {
  return `
  <div id="${props.id}" class="speaker-container margin-bottom">
    <div class="card-top">
      <span class="pro">${props.session}</span>
      <h2>${props.mode}</h2>
    </div>
    <img class="round" src="${props.img}" alt="user" />
    <h3>Amitabh Tewari</h3>
    <h6><i class="fa-solid fa-clock"></i>${props.time}</h6>
    <p>${props.detail}</p>
    <div class="buttons">
      <a href="${props.linkedIn}">
        <button><i class="fa fa-linkedin"></i></button>
      </a>
    </div>
    <div class="skills">
      <h6>Topic</h6>
      <ul>
        <li>${props.topic}</li>
      </ul>
    </div>
  </div>
  `;
}

function hydrateComboCards ( props ) {


  let cards = speakerDetails.filter(card => {
    return props.card_ids.includes(card.id);
  }).map(hydrateComboCard)

  cards = cards.join(`
  <div>
    +
  </div>
  `);
  
  return `
  <div id="${props.id}" class="combo-container">
    <h3 class="combo-name">${props.name}</h3>
    <div class="combo-cards">
      ${cards}
    </div>
    <div class="combo-button">
      <button id="addCart" class="primary">
        Add to Cart
      </button>
    </div>
  </div>
  `;
}

function hydrateCombo ( props ) {
  let record = "";
  props.forEach(combo => {
    record+= hydrateComboCards(combo)
  })

  return record;
}

const speakerSection = document.getElementById("speaker-section");
const orderTable = document.getElementById("orders");
const cartButton = document.getElementById("cartButton");
const cartLength = document.getElementById("cart-length");
const cancelButton = document.getElementById("cancel-button");
const checkOutButton = document.getElementById("checkout-button");
const comboSection = document.getElementById("combo-section");
let addButton = document.querySelectorAll("#addCart");
let cartItems = [];

window.addEventListener("load", () => {
  var records = "";

  speakerDetails.forEach((details)=>{
    records = records + hydrateCards(details) 
  })
  
  speakerSection.innerHTML += records;

  // console.log(hydrateCombo(eventCombos))

  comboSection.innerHTML = hydrateCombo(eventCombos);

  addButton = document.querySelectorAll("#addCart");

  addButton.forEach((button)=>{
    button.addEventListener('click', handleAddClick);
  });
})

function addToCart ( id ) {
  // Don't push duplicates
  if (cartItems.filter(item=> item.id == id).length > 0) return;

  // Add if id is present in speakerDetails
  cartItems.push( ...speakerDetails.filter( (item) => {
    return item.id == id;
  } ));

  if (eventCombos.filter(item => item.id == id).length > 0) {
    cartItems.push( ...eventCombos.filter((item) => {
      return item.id == id;
    }).map(item=>{
      return item.card_ids.map(id=>{
        return speakerDetails.filter(elem=>{
          return elem.id == id;
        })
      })
    }).flat(Infinity));
    discount += eventCombos.find(elem=> elem.id == id).discount
  }

  cartLength.textContent = cartItems.length;

  if (cartItems.length > 0) {
    cartButton.style.display = "block";
  }
}

function removeFromCart ( id ) {
  if (cartItems.filter(item=> item.id == id).length > 0) {
    cartItems = cartItems.filter(item=> item.id != id)
  } if (eventCombos.filter(item=> item.id == id).length > 0) {
    eventCombos.find(elem => elem.id == id).card_ids.forEach(id=>{
      cartItems = cartItems.filter(elem=> elem.id != id)
    });
    discount -= eventCombos.find(elem=> elem.id == id).discount

  } else {
    console.log("It's not in the Cart!")
  }

  cartLength.textContent = cartItems.length;

  if (cartItems.length == 0) {
    cartButton.style.display = "none"
  }
}

function handleAddClick(event) {
  addToCart(event.target.parentElement.parentElement.id);
  event.target.textContent = "Remove";
  event.target.id = "removeCart";
  event.target.removeEventListener('click', handleAddClick)
  
  const rmvButton = document.querySelectorAll("#removeCart");
  rmvButton.forEach ( (button) =>{
    button.addEventListener ( 'click' , handleRemoveClick)
  } )

  orderTable.innerHTML = hydrateCart(cartItems);
}

function handleRemoveClick(event) { 
  event.target.removeEventListener('click', handleRemoveClick)
  removeFromCart(event.target.parentElement.parentElement.id);
  event.target.textContent = "Add to Cart";
  event.target.id = "addCart";
  event.target.addEventListener('click', handleAddClick);

  orderTable.innerHTML = hydrateCart(cartItems);
}


// addButton.addEventListener("click", function(event) {
//   console.log(event.target.parentElement.parentElement.id);
// })



