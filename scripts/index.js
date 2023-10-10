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


const sunset = [
  '#F0F8FF',
  '#000000', 
  '#000000',
  '#F5F545',
  '#39B6E0',
  '#B1B1F3',
  '#9C9CF0',
  '#F1F1DD',
  '#000000',
  '#000000',
  '#F5F545',
  'images/left-arrow.png',
  'images/right-arrow.png',
  'images/down-arrow.png'
]

const duality = [
  '#FFFFFF',
  '#D3D3D3',
  '#FFFFFF',
  '#000000',
  '#000000',
  '#000000',
  '#FFFFFF',
  '#FFFFFF',
  '#000000',
  '#FFFFFF',
  '#000000',
  'images/left-arrow-white.png',
  'images/right-arrow.png',
  'images/down-arrow.png'
]

const hell = [
  '#F0F8FF',
  '#000000',
  '#000000',
  '#00FFFF',
  '#6495ED',
  '#00FFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#000000',
  '#000000',
  '#00FFFF',
  'images/left-arrow.png',
  'images/right-arrow.png',
  'images/down-arrow.png'
]

const nostalgia = [
  '#FFFFF0',
  '#F5DEB3',
  '#000000',
  '#F0E68C',
  '#FFE4B5',
  '#F4A460',
  '#F5F5DC',
  '#F5F5DC',
  '#000000',
  '#000000',
  '#F0E68C',
  'images/left-arrow-white.png',
  'images/right-arrow.png',
  'images/down-arrow.png'
]

const vampire = [
  '#0A0909',
  '#F58787',
  '#000000',
  '#B22222',
  '#D82246',
  '#FF6347',
  '#161313',
  '#161313',
  '#FFFFFF',
  '#FFFFFF',
  '#B22222',
  'images/left-arrow-white.png',
  'images/right-arrow-white.png',
  'images/down-arrow-white.png'
]

const hyperspace = [
  '#09090A',
  '#01051A', 
  '#000000',
  '#3939A8',
  '#63098D',
  '#ADD8E6',
  '#141316',
  '#131316',
  '#FFFFFF',
  '#FFFFFF',
  '#3939A8',
  'images/left-arrow-white.png',
  'images/right-arrow-white.png',
  'images/down-arrow-white.png'
]

const peace = [
  '#252525',
  '#999999', 
  '#000000',
  '#4B4B4B',
  '#4B4B4B',
  '#4B4B4B',
  '#8D8D8D',
  '#8D8D8D',
  '#000000',
  '#000000',
  '#8D8D8D',
  'images/left-arrow.png',
  'images/right-arrow.png',
  'images/down-arrow.png'
]

const corpo = [
  '#00060c',
  '#011122',
  '#C0A407',
  '#00060c',
  '#C0A407',
  '#031425',
  '#00060c',
  '#00060c',
  '#FFFFFF',
  '#FFFFFF',
  '#011a33',
  'images/left-arrow-white.png',
  'images/right-arrow-white.png',
  'images/down-arrow-white.png'
]

const yang = [
  '#000000',
  '#0C0C0C',
  '#FFFFFF',
  '#000000',
  '#FFFFFF',
  '#FFFFFF',
  '#000000',
  '#000000',
  '#FFFFFF',
  '#000000',
  '#FFFFFF',
  'images/left-arrow.png',
  'images/right-arrow-white.png',
  'images/down-arrow-white.png'
]

const theme = document.querySelector(':root');
const headerArrow = document.querySelector('.header-left-arrow-icon');
const formularyArrow = document.querySelectorAll('.formulary-right-icon')
const dropdownArrow = document.querySelectorAll('.dropdown-down-arrow');

function changePalette(palette, dataColor) {
  const option = document.querySelector(`[data-colors="${dataColor}"]`);
  option.addEventListener ( 'click', () =>{
    theme.style.setProperty('--bg-color-base', palette[0]);
    theme.style.setProperty('--bg-color-outside', palette[1]);
    theme.style.setProperty('--accent-color-text', palette[2]);
    theme.style.setProperty('--accent-color-main', palette[3]);
    theme.style.setProperty('--accent-color-secundary', palette[4]);
    theme.style.setProperty('--accent-color-terciary', palette[5]);
    theme.style.setProperty('--accent-color-quaternary', palette[6]);
    theme.style.setProperty('--accent-color-weakmain', palette[7]);
    theme.style.setProperty('--accent-color-alternateText', palette[8]);
    theme.style.setProperty('--accent-color-specialText', palette[9]);
    theme.style.setProperty('--accent-color-specialMain', palette[10]);
    headerArrow.src = palette[11]
    formularyArrow.forEach(value => {
      value.src = palette[12]
    })
    dropdownArrow.forEach(value => {
      value.src = palette[13]
    })

    document.querySelector(`[data-picker="base"]`).value = theme.style.getPropertyValue('--bg-color-base');
    document.querySelector(`[data-picker="outside"]`).value = theme.style.getPropertyValue('--bg-color-outside');
    document.querySelector(`[data-picker="text"]`).value = theme.style.getPropertyValue('--accent-color-text');
    document.querySelector(`[data-picker="main"]`).value = theme.style.getPropertyValue('--accent-color-main');
    document.querySelector(`[data-picker="secundary"]`).value = theme.style.getPropertyValue('--accent-color-secundary');
    document.querySelector(`[data-picker="terciary"]`).value = theme.style.getPropertyValue('--accent-color-terciary');
    document.querySelector(`[data-picker="quaternary"]`).value = theme.style.getPropertyValue('--accent-color-quaternary');
    document.querySelector(`[data-picker="weak"]`).value = theme.style.getPropertyValue('--accent-color-weakmain');
    document.querySelector(`[data-picker="alternate"]`).value = theme.style.getPropertyValue('--accent-color-alternateText');
    document.querySelector(`[data-picker="specialtext"]`).value = theme.style.getPropertyValue('--accent-color-specialText');
    document.querySelector(`[data-picker="specialmain"]`).value = theme.style.getPropertyValue('--accent-color-specialMain');
  })
}

changePalette(sunset, 'sunset');
changePalette(duality, 'duality');
changePalette(hell, 'hell');
changePalette(nostalgia, 'nostalgia');
changePalette(vampire, 'vampire');
changePalette(hyperspace, 'hyperspace');
changePalette(peace, 'peace');
changePalette(corpo, 'corpo');
changePalette(yang, 'yang');

const colorPickerOne = document.querySelector(`[data-picker="base"]`);

colorPickerOne.addEventListener('change', () => {
  theme.style.setProperty('--bg-color-base', colorPickerOne.value);
})

const colorPickerTwo = document.querySelector(`[data-picker="outside"]`);

colorPickerTwo.addEventListener('change', () => {
  theme.style.setProperty('--bg-color-outside', colorPickerTwo.value);
})
const colorPickerThree = document.querySelector(`[data-picker="text"]`);

colorPickerThree.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-text', colorPickerThree.value);
})
const colorPickerFour = document.querySelector(`[data-picker="main"]`);

colorPickerFour.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-main', colorPickerFour.value);
})
const colorPickerFive = document.querySelector(`[data-picker="secundary"]`);

colorPickerFive.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-secundary', colorPickerFive.value);
})
const colorPickerSix = document.querySelector(`[data-picker="terciary"]`);

colorPickerSix.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-terciary', colorPickerSix.value);
})
const colorPickerSeven = document.querySelector(`[data-picker="quaternary"]`);

colorPickerSeven.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-quaternary', colorPickerSeven.value);
})
const colorPickerEight = document.querySelector(`[data-picker="weak"]`);

colorPickerEight.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-weakmain', colorPickerEight.value);
})
const colorPickerNine = document.querySelector(`[data-picker="alternate"]`);

colorPickerNine.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-alternateText', colorPickerNine.value);
})
const colorPickerTen = document.querySelector(`[data-picker="specialtext"]`);

colorPickerTen.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-specialText', colorPickerTen.value);
})
const colorPickerEleven = document.querySelector(`[data-picker="specialmain"]`);

colorPickerEleven.addEventListener('change', () => {
  theme.style.setProperty('--accent-color-specialMain', colorPickerEleven.value);
})

theme.style.setProperty('--bg-color-base', sunset[0]);
theme.style.setProperty('--bg-color-outside', sunset[1]);
theme.style.setProperty('--accent-color-text', sunset[2]);
theme.style.setProperty('--accent-color-main', sunset[3]);
theme.style.setProperty('--accent-color-secundary', sunset[4]);
theme.style.setProperty('--accent-color-terciary', sunset[5]);
theme.style.setProperty('--accent-color-quaternary', sunset[6]);
theme.style.setProperty('--accent-color-weakmain', sunset[7]);
theme.style.setProperty('--accent-color-alternateText', sunset[8]);
theme.style.setProperty('--accent-color-specialText', sunset[9]);
theme.style.setProperty('--accent-color-specialMain', sunset[10]);

document.querySelector(`[data-picker="base"]`).value = theme.style.getPropertyValue('--bg-color-base');
document.querySelector(`[data-picker="outside"]`).value = theme.style.getPropertyValue('--bg-color-outside');
document.querySelector(`[data-picker="text"]`).value = theme.style.getPropertyValue('--accent-color-text');
document.querySelector(`[data-picker="main"]`).value = theme.style.getPropertyValue('--accent-color-main');
document.querySelector(`[data-picker="secundary"]`).value = theme.style.getPropertyValue('--accent-color-secundary');
document.querySelector(`[data-picker="terciary"]`).value = theme.style.getPropertyValue('--accent-color-terciary');
document.querySelector(`[data-picker="quaternary"]`).value = theme.style.getPropertyValue('--accent-color-quaternary');
document.querySelector(`[data-picker="weak"]`).value = theme.style.getPropertyValue('--accent-color-weakmain');
document.querySelector(`[data-picker="alternate"]`).value = theme.style.getPropertyValue('--accent-color-alternateText');
document.querySelector(`[data-picker="specialtext"]`).value = theme.style.getPropertyValue('--accent-color-specialText');
document.querySelector(`[data-picker="specialmain"]`).value = theme.style.getPropertyValue('--accent-color-specialMain');
