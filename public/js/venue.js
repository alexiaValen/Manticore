console.log('hello!!!!');
const venueEl = document.getElementById('venues');
const venueButton = document.getElementById('venue-btn');

const getVenues = async () => {
  const result = await fetch('venueData.json', {
    method: 'GET',
  });
  console.log('working1')
  const vendata = await result.json();
  console.log(vendata)
  return vendata;
  
//   function appendData(vendata) {
//     var vSpot = document.getElementById("vData");
//     for (var i = 0; i < data.length; i++) {
//       var div = document.createElement("vlist");
//       div.innerHTML = 'List: ' + data[i].activitytype + ' ' + data[i].venue + ' ' + data[i].city + ' ' + data[i].state + ' ' + data[i].website;
//       mainContainer.appendChild(div);
//       console.log('working append')
//     }
//   }
};


getVenues();
   
const renderVenue = (venue) => {
    const vadEl = document.createElement('div');
    const vndE1 = document.createElement('div');
    const vcdE1 = document.createElement('div');
    const vsdE1 = document.createElement('div');
    const vwdE1 = document.createElement('div');
  
    vadEl.classList.add('va');
    vndE1.classList.add('vn');
    vcdE1.classList.add('vc');
    vsdE1.classList.add('vs');
    vwdE1.classList.add('vw');
  
    vadEl.innerText = venue.activitytype; 
    vndE1.innerText = venue.venue;
    vcdE1.innerText = venue.city;
    vsdE1.innerText = venue.state;
    vwdE1.innerHTML = `<a href=${venue.website}>${venue.website}</a>`

    console.log('working2')
    venueEl.appendChild(vadEl);
    venueEl.appendChild(vndE1);
    venueEl.appendChild(vcdE1);
    venueEl.appendChild(vsdE1);
    venueEl.appendChild(vwdE1);

    console.log('working3')
  };
  

const buttonHandler = () =>
  getVenues().then((response) => response.forEach((item) => renderVenue(item)),   
  console.log('working3'));
  
venueButton.addEventListener('click', buttonHandler);

