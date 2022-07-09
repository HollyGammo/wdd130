card.appendChild(button);

button.classList.add("likeBtn");

if (temple.name == "Philadelphia Pennsylvania Temple") {
    button.classList.add('phillyBtn')
    button.setAttribute('onclick', 'phillyCount()');
  } else if (temple.name == "Salt Lake Temple") {
    button.classList.add('slcBtn')
    button.setAttribute('onclick', 'slcCount()');
  } else if (temple.name == "Nauvoo Illinois Temple") {
    button.classList.add('NauvBtn')
    button.setAttribute('onclick', 'NauvCount()');
  } else if (temple.name == "Palmyra New York Temple") {
    button.classList.add('palBtn')
    button.setAttribute('onclick', 'palCount()');
  }