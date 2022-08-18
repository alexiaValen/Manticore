const url = 'https://parentresourcesapi.herokuapp.com/resources';

const feedDisplay = document.querySelector('#feed')

fetch('url')
    .then(response => response.json())
    .then(data => {
        data.forEach(resource => {
            const resourceItem = `<div><h3>` + resource.title + `</h3><p>` + resource.url + `</p>`
            feedDisplay.insertAdjacentHTML("beforeend", resourceItem)
        })
    }).catch(err => console.log(err))



    