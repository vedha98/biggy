
var cards = [
    {
        img: './src/cashier.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:"#50C5F3"
    },
    {
        img: './src/dusk.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#54B886'
    },
    {
        img: './src/echo.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#EE6656'
    },
    {
        img: './src/horizon.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#8C6ED3'
    },
    {
        img: './src/homestead.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#4099DE'
    },
    {
        img: './src/forge.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#4DB2B0'
    },
    {
        img: './src/echo.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#F5AE7A'
    },
    {
        img: './src/envoyer.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#E78020'
    },
    {
        img: './src/dusk.min.svg',
        title: "hello",
        desc: 'asdasdasd',
        bgcolor:'#F0C376'
    },
]
window.onload = () => {
    cards.forEach(val => {
        var element = `<div class="eco-card">
       <div class="card-img" style='background-color:${val.bgcolor}'>
           <img height="100%" src="${val.img}" alt="">
       </div>
       <div class="card-details">
          ${val.title}
          <span>${val.desc}</span>
       </div>
   </div>`
        document.getElementById("eco-card-grid").innerHTML = document.getElementById("eco-card-grid").innerHTML + element
    })
}