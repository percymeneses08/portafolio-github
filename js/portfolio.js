const ipad = window.matchMedia('screen and (max-width: 1023px)');

const project = document.querySelector('.project-link');
const events = document.querySelector('.event-link');
const certificate = document.querySelector('.certificate-link');
const contact = document.querySelector('.contact-link');

const hackspaceBadge = document.querySelector('.project-image.hackspace-badge')
const invie = document.querySelector('.project-image.invie');
const compraFacil = document.querySelector('.project-image.compra-facil');
const platziVideo = document.querySelector('.project-image.platzi-video');
const theater = document.querySelector('.project-image.theater');
const pinterest = document.querySelector('.project-image.pinterest');
const peso = document.querySelector('.project-image.peso');

ipad.addListener(Validation);

function Validation(event)
{
  if (event.matches)
  {
    project.addEventListener('click', ProjectPosition);
    events.addEventListener('click', EventPosition);
    certificate.addEventListener('click', CertificatePosition);
    contact.addEventListener('click', ContactPosition);
  }
  else
  {
    project.removeEventListener('click', ProjectPosition);
    events.removeEventListener('click', EventPosition);
    certificate.removeEventListener('click', CertificatePosition);
    contact.removeEventListener('click', ContactPosition);
  }
}
Validation(ipad);

hackspaceBadge.addEventListener('click', OpenHackspaceBadge)
invie.addEventListener('click', OpenInvie);
compraFacil.addEventListener('click', OpenCompraFacil);
platziVideo.addEventListener('click', OpenPlatziVideo);
theater.addEventListener('click', OpenTheater);
// pinterest.addEventListener('click', OpenPinterest);
peso.addEventListener('click', OpenPeso);
// platziVideo.addEventListener('click', OpenPlatziVideo);
// theater.addEventListener('click', OpenTheater);
// pinterest.addEventListener('click', OpenPinterest);
// peso.addEventListener('click', OpenPeso);

function ProjectPosition()
{
  window.location.href = "#portafolio";
}
function EventPosition()
{
  window.location.href = "#eventos";
}
function CertificatePosition()
{
  window.location.href = "#certificados";
}
function ContactPosition()
{
  window.location.href = "#contacto";
}

function OpenHackspaceBadge () {
  window.location.href = "https://percymeneses08.github.io/hackspace-badges-firebase/"
}
function OpenInvie() {
  window.location.href = "https://percymeneses08.github.io/invie/";
}
function OpenCompraFacil()
{
  window.location.href = "https://percymeneses08.github.io/CompraFacil/";
}
function OpenPlatziVideo()
{
  window.location.href = "https://percymeneses08.github.io/PlatziVideo/";
}
function OpenTheater()
{
  window.location.href = "https://percymeneses08.github.io/Movie.es/";
}
/* function OpenPinterest()
{
  window.location.href = "html/pinterest-index.html";
} */
function OpenPeso()
{
  window.location.href = "html/construccion-index.html";
}
