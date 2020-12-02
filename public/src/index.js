
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

// Add event listeners for the meme expand buttons.
const memeBtnList = document.getElementsByClassName('meme-btn')
const memeImgList = document.getElementsByClassName('meme-img')

// Little assertion to make sure the meme/button pairs have no stags.
if (memeBtnList.length !== memeImgList.length) {
    console.error(`The number of meme expander buttons: ${memeBtnList.length} doesn't equal the number of expandable memes: ${memeImgList.length}`)
}

const toggleImg = index => () => {
    const img = memeImgList[index]
    if (img.classList.contains('img-hide')) {
        img.classList.remove('img-hide')
    } else {
        img.classList.add('img-hide')
    }
}

for (let i = 0; i < memeBtnList.length; i++) {
    const btn = memeBtnList[i]
    const img = memeImgList[i]
    btn.addEventListener('click', toggleImg(i))
    img.addEventListener('click', toggleImg(i))
}
