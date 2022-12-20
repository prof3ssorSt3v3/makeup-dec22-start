import { NetworkError } from './utils.js';

const APP = {
  storageKey: 'imageAndImage',
  init: () => {
    //page loaded
    //add change listener for the select in nav
    //add double click to header to clear header image
    //add listener to overlay select
  },
  checkForHeader: () => {
    //check in localStorage for a heading
    //if it exists then set it as the heading background
    // no JSON.parse needed
    //if not, show the overlay and the form.
  },
  setHeader: (ev) => {
    //when the user picks (submits the form) then save the image url to localStorage
    //then set the url as the heading background
    //use 1200x200 as the dimensions for the request and ?grayscale
  },
  clearHeaderImage: (ev) => {
    //clear localStorage value for the url
    //remove the background image from the header
    //show the overlay
  },
  getImageList: (ev) => {
    //fetch the list of JSON and then build the image grid
    let num = Math.floor(Math.random() * 20);
    let url = `https://picsum.photos/v2/list?limit=12&page=${num}`;
    //handle any response errors
    //call buildGrid and pass the data to use to build the grid of cards.
  },
  buildGrid: (data) => {
    //fill the main section with images and labels of Author
    //use innerHTML = data.map().join() to create the content
  },
  handleError: (err) => {
    //handle the errors
    //display the errors inside main as h2 or h3 elements with err class
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
