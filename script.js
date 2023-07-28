/* document.body.addEventListener('mouseover', function(event) {
  event.target.classList.add('opaco');
});

document.body.addEventListener('mouseout', function(event) {
  event.target.classList.remove('opaco');
});
 */


const updateCursor = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor)

const click = document.querySelector('.click')
const clickLF = document.querySelector('.left')
const clickTO = document.querySelector('.top')
const clickBT = document.querySelector('.botton')
const clickRT = document.querySelector('.right')
const icon = document.querySelector('.icon')
const svg = document.querySelector('.svg')

let hasBeenClicked = false;

click.addEventListener('click', () => {

  if (hasBeenClicked == false) {
    // agregar animacion al icono
    icon.style = 'animation: rotate 1s ease-in-out forwards;'
    setTimeout(() => {
      // Elimina todos los elementos hijos
      while (icon.firstChild) {
        icon.removeChild(icon.firstChild);
      }
      // Agrega los elementos hijos
      icon.innerHTML = '<svg class="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 11 4 C 7.1 4 4 7.1 4 11 L 4 39 C 4 42.9 7.1 46 11 46 L 39 46 C 42.9 46 46 42.9 46 39 L 46 14.900391 L 44 17.300781 L 44 39 C 44 41.8 41.8 44 39 44 L 11 44 C 8.2 44 6 41.8 6 39 L 6 11 C 6 8.2 8.2 6 11 6 L 37.199219 6 L 38.900391 4 L 11 4 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"/></svg>'
    }, 100);

    // Agrega las clases
    clickRT.classList.add('active')
    clickLF.classList.add('active')
    clickBT.classList.add('active')
    clickTO.classList.add('active')

    // Agrega las animaciones
    clickTO.style = 'animation: Top 1s ease-in-out forwards;';
    clickBT.style = 'animation: Botton 1s ease-in-out forwards;';
    clickLF.style = 'animation: Left 1s ease-in-out forwards;';
    clickRT.style = 'animation: Right 1s ease-in-out forwards;';
    // modifica el estado de la variable
    hasBeenClicked = true;

  } else if (hasBeenClicked == true) 
  {
    
    icon.style = 'animation: identifierInverse 1s ease-in-out forwards;'
    // Elimina todos los elementos hijos
    while (icon.firstChild) 
    {
      icon.removeChild(icon.firstChild);
    }
    // Agrega los elementos hijos
    icon.innerHTML = '<svg width="150px" height="150px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" ><path id="path" style="opacity:1; fill-opacity:1;" d=" M 925 103C 925 103 925 350 925 350C 925 364 914 375 900 375C 886 375 875 364 875 350C 875 350 875 160 875 160C 875 160 518 518 518 518C 508 528 492 528 482 518C 472 508 472 492 482 482C 482 482 840 125 840 125C 840 125 650 125 650 125C 636 125 625 114 625 100C 625 86 636 75 650 75C 650 75 897 75 897 75C 898 75 899 75 900 75C 915 74 927 88 925 103C 925 103 925 103 925 103M 450 225C 464 225 475 236 475 250C 475 264 464 275 450 275C 450 275 200 275 200 275C 183 275 164 284 149 299C 134 314 125 333 125 350C 125 350 125 800 125 800C 125 832 134 848 147 859C 160 870 179 875 200 875C 200 875 650 875 650 875C 667 875 686 866 701 851C 716 836 725 817 725 800C 725 800 725 550 725 550C 725 536 736 525 750 525C 764 525 775 536 775 550C 775 550 775 800 775 800C 775 833 759 864 736 886C 714 909 683 925 650 925C 650 925 200 925 200 925C 171 925 140 918 115 897C 91 877 75 843 75 800C 75 800 75 350 75 350C 75 317 91 286 114 264C 136 241 167 225 200 225C 200 225 450 225 450 225" transform=""></path> </svg>'
      
    clickRT.classList.remove('active')  
    clickLF.classList.remove('active')  
    clickBT.classList.remove('active')  
    clickTO.classList.remove('active')  
  
    clickTO.style = 'animation: Top2 1s ease-in-out  forwards;'
    clickBT.style = 'animation: Botton2 1s ease-in-out  forwards;'
    clickLF.style = 'animation: Left2 1s ease-in-out  forwards;'
    clickRT.style = 'animation: Right2 1s ease-in-out  forwards;'
  
  hasBeenClicked = false;
  }

})

