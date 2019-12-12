import React from 'react';
import './index.css';

function setTheme(color, colour) {
  color=color.slice(0,7)
  colour=colour.slice(0,7)
  document.documentElement.style.setProperty('--primary', color);
  document.documentElement.style.setProperty('--secondary', colour);
}

export default setTheme

// class SetTheme {
//   this.color_1 = 'black'
//   this.color_2 = 'white'
//
//   changeColors = (p, s) => {
//     console.log(p, s);
//   }
// }
//
// export default SetTheme
