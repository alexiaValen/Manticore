const stylesDisplay = document.querySelector('#styles');
const mindlyDisplay = document.querySelector('#mindly')
const autismDisplay = document.querySelector('#autism');
const legalDisplay = document.querySelector('#legal');




fetch('https://parentviewapi.herokuapp.com/resources/styles')
    .then(response => response.json())
    .then(data => {
        data.forEach(resource => {
            const resourceItem = 
            `<br><a href="` + resource.url + `">` + resource.url + `</a><br>`
            stylesDisplay.insertAdjacentHTML("beforeEnd", resourceItem)
    });
}).catch(err => console.log(err))

fetch('https://parentviewapi.herokuapp.com/resources/happymind')
    .then(response => response.json())
    .then(data => {
        data.forEach(resource => {
            const resourceItem = `<br><a href="` + resource.url + `">` + resource.url + `</a><br>`
            mindlyDisplay.insertAdjacentHTML("beforeend", resourceItem)
    });
}).catch(err => console.log(err))

fetch('https://parentviewapi.herokuapp.com/resources/autism')
    .then(response => response.json())
    .then(data => {
        data.forEach(resource => {
            const resourceItem = `<br><a href="` + resource.url + `">` + resource.url + `</a><br>`
            autismDisplay.insertAdjacentHTML("beforeend", resourceItem)
    });
}).catch(err => console.log(err))


fetch('https://parentviewapi.herokuapp.com/resources/legal')
    .then(response => response.json())
    .then(data => {
        data.forEach(resource => {
            const resourceItem = `<br><a href="` + resource.url + `">` + resource.url + `</a><br>`
            legalDisplay.insertAdjacentHTML("beforeend", resourceItem)
    });
}).catch(err => console.log(err))


