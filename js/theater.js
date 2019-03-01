const ipad = window.matchMedia('screen and (max-width: 1023px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

ipad.addListener(Validation);

function Validation(event)
{
  if(event.matches)
  {
    burgerButton.addEventListener('click', hideShow);
  }
  else
  {
    burgerButton.removeEventListener('click', hideShow);
  }
}
Validation(ipad);

function hideShow ()
{
  if(menu.classList.contains('is-active')) 
  {
    menu.classList.remove('is-active');
  }
  else 
  {
    menu.classList.add('is-active');
  }
}