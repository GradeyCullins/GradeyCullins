
import _ from 'lodash'
import '../css/main.css'

// function component() {
//   const element = document.createElement('div')

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//   return element
// }

// document.body.appendChild(component())

const sBtn = document.getElementById('starship-img-btn')
const sImg = document.getElementById('starship-img')

const toggleImg = () => {
    if (sImg.classList.contains('img-hide')) {
        sImg.classList.remove('img-hide')
    } else {
        sImg.classList.add('img-hide')
    }
}

sBtn.addEventListener('click', toggleImg)
sImg.addEventListener('click', toggleImg)