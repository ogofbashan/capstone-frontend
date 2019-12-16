import React from 'react';
import './index.css';

function setTheme(color, colour, textcolor) {
  color=color.slice(0,7)
  colour=colour.slice(0,7)
  textcolor=textcolor.slice(0,7)
  document.documentElement.style.setProperty('--primary', color);
  document.documentElement.style.setProperty('--secondary', colour);
  document.documentElement.style.setProperty('--textcolor', textcolor);
  document.getElementById("Result_Card").style.display= "inline";

}

export default setTheme
