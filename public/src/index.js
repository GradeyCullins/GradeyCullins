
import _ from 'lodash'
import '../static/css/main.css'

// The link to the blog is dependent on the build environment.
const blogLink = document.getElementById('blog-link')
if (process.env.ENV === 'development') {
    // 4000 is the default jekyll dev port.
    blogLink.href = 'http://127.0.0.1:4000'
} else if (process.env.ENV === 'production') {
    blogLink.href = 'https://blog.gradeycullins.com'
}

// Add event listener for the meme expand button.
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