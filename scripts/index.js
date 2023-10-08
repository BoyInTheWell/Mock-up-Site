const agentsList = [
  {
    name: "João da Silva de Sá",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Marilia Pereira da Silva",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Carolina Linda Bela",
    shift: "Morning",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Vander da Silva Pereira",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI3001"
  },  {
    name: "Luizito Palito",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Miguelito Alejandros",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Maffalda Fernandez de Guiga",
    shift: "Morning",
    supervisor: "Wellington Lucas",
    mainTask: "PT-BHP6001"
  },  {
    name: "João Figueiredo de Sales",
    shift: "Morning",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI7012"
  },  {
    name: "Charlotte Blackstew",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Marie-Joseph Sanson",
    shift: "Morning",
    supervisor: "Wellington Lucas",
    mainTask: "PT-BHP6003"
  },  {
    name: "Joseph Joestar",
    shift: "Afternoon",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Marie Antoinnete",
    shift: "Morning",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI2001"
  },  {
    name: "Arthur Morningveil",
    shift: "Morning",
    supervisor: "Wellington Lucas",
    mainTask: "EN-EMI5001"
  }, 
]

const dropdownOptions = [
  'Jean-Luc Pierre',
  'Chris Heartfield',
  'Hieronymous Bosch',
  'Jhon Romulos B. Carlson',
  'Acentossilvo Furunco'
]

const shiftOptions = [
  "Afternoon",
  "Morning",
  "Integral",
  "Custom"
]

const taskOptions = [
  "EN-EMI2002",
  "EN-EMI2012",
  "EN-EMI2004",
  "PT-BHP2006"
]

let agentsListHTML = '';

agentsList.forEach(value => {
  const currentItem = `<div class="formulary-item">
  <p>${value.name} - ${value.shift} <br> ${value.supervisor} - ${value.mainTask} </p>
  <img src="images/right-arrow.png" class="formulary-right-icon">
  </div>`
  agentsListHTML += currentItem;
})

document.querySelector('.agent-selection')
.innerHTML = agentsListHTML


function createDropdown (options, classData, titleParagraph, titleText) {
// generates all the HTML  
let itemsHTML = ''
  options.forEach(value => {
    const currentItem = `
    <p class="dropdown-option" data-option="${classData+'-option'}">${value}</p>
    `
    itemsHTML += currentItem 
  })

  document.querySelector(`[data-code="${classData}"]`)
  .innerHTML = `
  <div class="dropdown-container" data-container="${classData+'-container'}">
    <p class="dropdown-item-text" data-text="${classData+'-text'}" "></p>
    <button class="dropdown-button" data-button="${classData+'-button'}" "><img src="images/down-arrow.png" class="dropdown-down-arrow"></button>
  </div>
  
  
  <div class="dropdown-content-holder" data-content="${classData+'-content'}" ">
    ${itemsHTML}
  </div>
  `

// adds the event listener to the specific button
const dropdownButton = document.querySelector(`[data-button="${classData+'-button'}"]`);

dropdownButton.addEventListener('click', () => {
  document.querySelector(`[data-code="${classData}"]`).style.setProperty('display', 'block')
  document.querySelector(`[data-content="${classData+'-content'}"]`).style.setProperty('display', 'block')
});


// adds the evnent listener to each item of the dropdown
const dropdownItem = document.querySelectorAll(`[data-option="${classData+'-option'}"]`);

dropdownItem.forEach((item) => {
  item.addEventListener('click', () => {
   document.querySelector(`[data-content="${classData+'-content'}"]`).style.setProperty('display', 'none')
   document.querySelector(`[data-text="${classData+'-text'}"]`).innerHTML = item.innerHTML
  }); 
})

// alter the title for the 4th param
document.querySelector(`[data-title-text="${titleParagraph}"]`).innerHTML = titleText

}

createDropdown(shiftOptions, "shift", "shift", "Agent's Shift")
createDropdown(taskOptions, "task", "task", "Agent's Task")
createDropdown(dropdownOptions, "supervisor", "supervisor", "Agent's Supervisor")


/* const btnn = document.querySelector('.js-pallete-button');

const theme = document.querySelector(':root');

btnn.addEventListener('click', () => {
  theme.style.setProperty('--bg-color-outside', 'red')
}); */