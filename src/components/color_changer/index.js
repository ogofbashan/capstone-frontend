import './index.css';

// Receives the color information from the Team table to alter the custom colors set in root. Also, displays the info card.

function setTheme(primary_color, secondary_color, text_color) {
  primary_color=primary_color.slice(0,7)
  secondary_color=secondary_color.slice(0,7)
  text_color=text_color.slice(0,7)
  
  document.documentElement.style.setProperty('--primary', primary_color);
  document.documentElement.style.setProperty('--secondary', secondary_color);
  document.documentElement.style.setProperty('--textcolor', text_color);
  document.getElementById("result-card").style.display= "inline";

}

export default setTheme
