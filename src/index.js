import { greetUser } from './user.js'
import $ from 'jquery'

$(document).ready(function() {
  console.log('jQuery just checked that the DOM is ready!');
});

greetUser("boris");
console.log('Hello')
