const navBar = document.querySelector('nav')
const navLink = document.querySelector('nav ul')

window.onscroll = () => {
    let top = window.scrollY
    if(top > 0) {
        navLink.style.color = `rgb(32 ,32, 32)`
    }
    if (top > 500) {
        navBar.style.backgroundColor = 'rgb(32, 32, 32)'
    }
    else if (top > 100) {
        let opacity = ((top - 100) / 300)
        navBar.style.backgroundColor = `rgba(32, 32, 32, ${opacity})`
    }
    else
        navBar.style.backgroundColor = '#00000000'
}
