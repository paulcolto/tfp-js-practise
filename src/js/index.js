/* eslint-disable */

const headingText = document.querySelector('#headingText');
const changeHeadingText = () => {
  headingText.style.color = 'white';
  headingText.style.backgroundColor = 'black';
};


const infoText = document.querySelector('#infoText');
const showText = () => {
  infoText.style.display = 'block';
};

const hideText = () => {
    infoText.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  headingText.addEventListener('mouseover', changeHeadingText);

  const imgIn = document.querySelector('#img')
  imgIn.addEventListener('mouseenter', showText);
  const imgOut = document.querySelector('#img')
  imgOut.addEventListener('mouseleave', hideText);
});
