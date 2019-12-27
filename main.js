
var cards = [
    {
        img: './src/cashier.min.svg',
        title: "Vapor",
        desc: 'Serverless Platform',
        bgcolor: "#50C5F3"
    },
    {
        img: './src/dusk.min.svg',
        title: "Forge",
        desc: 'Server Management',
        bgcolor: '#54B886'
    },
    {
        img: './src/echo.min.svg',
        title: "Envoyer",
        desc: 'Zero Downtime Payment',
        bgcolor: '#EE6656'
    },
    {
        img: './src/horizon.min.svg',
        title: "Horizon",
        desc: 'Queue Monitoring',
        bgcolor: '#8C6ED3'
    },
    {
        img: './src/homestead.min.svg',
        title: "Nova",
        desc: 'Administration Panel',
        bgcolor: '#4099DE'
    },
    {
        img: './src/forge.min.svg',
        title: "Echo",
        desc: 'Realtime Events',
        bgcolor: '#4DB2B0'
    },
    {
        img: './src/echo.min.svg',
        title: "Lumen",
        desc: 'Micro Framework',
        bgcolor: '#F5AE7A'
    },
    {
        img: './src/envoyer.min.svg',
        title: "Homestead",
        desc: 'Pre Packaged Vagrant box',
        bgcolor: '#E78020'
    },
    {
        img: './src/dusk.min.svg',
        title: "Spark",
        desc: 'saas app scafolding',
        bgcolor: '#F0C376'
    },
]
window.onload = () => {
    cards.forEach(val => {
        // var element = document.createElement('div')
        // element.classList.add("eco-card");
        // var imgchild = document.createElement('div');
        // imgchild.classList.add("card-img")
        // imgchild.style.backgroundColor = val.bgcolor;
        // var img = document.createElement('img')
        // img.src = val.img;
        // imgchild.appendChild(img);
        // var carddetails = document.createElement('div');
        // carddetails.classList.add('card-details');
        // carddetails.innerText = (val.title);
        // var cardspan = document.createElement('span');
        // cardspan.innerText = val.desc;
        // carddetails.appendChild(cardspan)
        // element.appendChild(imgchild);
        // element.appendChild(carddetails);
        // document.getElementById("eco-card-grid").appendChild(element);

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



//sidebar
const showsidebar=()=>{
    console.log("showing")
    document.getElementById("sidebar").classList.add("active");
}
const hidesidebar=()=>{
    document.getElementById("sidebar").classList.remove("active");
}
const scrool=(id)=>{
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.getElementById("sidebar").classList.remove("active");
}