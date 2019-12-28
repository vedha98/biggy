var city
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
var sugg={}
window.onload = () => {
    populateinputs()
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
const showsidebar = () => {
    console.log("showing")
    document.getElementById("sidebar").classList.add("active");
}
const hidesidebar = () => {
    document.getElementById("sidebar").classList.remove("active");
}
const scrool = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.getElementById("sidebar").classList.remove("active");
}


//doctors


const getsuggestions =async(city) => {
    let URL = `https://www.practo.com/health/api/top/omni/suggestion.json?city=${city}&locale=en-en&query_type=locality`
    let res = await fetch(URL);
    let data = await res.json();
    return data
    
}
const getdoctors = async ()=>{
    let URL = `https://www.practo.com/health/api/top/omni/suggestion.json?city=${city}&locale=en-en&query_type=locality`
    let res = await fetch(URL);
    let data = await res.json();
    return data

}
const setLocation = (index) => {
    document.getElementById('loc_input').value = locations[index].name;
    city = locations[index].name;
    document.getElementById('sugg_input').focus()
    filterloc()
    populatesuggestion(locations[index].name)
    hide("locations-ul")
    show('sugg-ul')
}

const populateinputs = () => {
    locations.forEach((val, i) => {
        var li = document.createElement('li')
        li.setAttribute('onclick', `setLocation(${i})`)
        li.innerText = val.name
        document.getElementById('locations-ul').appendChild(li)
    })
    hide('sugg-ul')
}
const showorhide = (ele, type) => {
    let element = document.getElementById(ele);
    if (element.style.display == "none") {
        if (type) {
            element.style.display = type;
        } else {
            element.style.display = "block"
        }

    } else {
        element.style.display = "none"
    }
}
const show = (ele, type) => {
    hideall()
    let element = document.getElementById(ele);
    if (type) {
        element.style.display = type;
    } else {
        element.style.display = "block"
    }
}
const hide = (ele) => {
    let element = document.getElementById(ele);
    element.style.display='none'
}

const hideall = (event) => {
    console.log("hides")
    document.getElementById('locations-ul').style.display = "none";
    document.getElementById('sugg-ul').style.display = "none";

}

const populatefilter = (str) => {
    locations.forEach((val, i) => {
        if (val.name.toLowerCase().indexOf(str.toLowerCase()) > -1) {
            var li = document.createElement('li')
            li.setAttribute('onclick', `setLocation(${i})`)
            li.innerText = val.name
            document.getElementById('locations-ul').appendChild(li)
        }
    })
}
const suggfilter = (str) => {
    sugg.forEach((val, i) => {
       
        if (val.suggestion.toLowerCase().indexOf(str.toLowerCase()) > -1) {
            var li = document.createElement('li')
            li.setAttribute('onclick', ``)
            li.innerText = val.suggestion
            document.getElementById('sugg-ul').appendChild(li)
        }
    })
}
const filterloc = () => {
    show('locations-ul')
    let quer = document.getElementById('loc_input').value;
    document.getElementById('locations-ul').innerHTML = "";
    if (quer == "") {
        populateinputs()
    } else {
        populatefilter(quer)
    }


}
const filtersugg=()=>{
    show('sugg-ul')
    let quer = document.getElementById('sugg_input').value;
    document.getElementById('sugg-ul').innerHTML = "";
    if (quer == "") {
        mapsugg()
    } else {
       suggfilter(quer)
    }
}
const regalert=(str)=>{
    document.getElementById('reg-notify').innerHTML=`<div class="notification-item" ">
    <img width="30px" src="./src/error.png" alt="" srcset=""><p>${str}</p> 
 </div>`
}
const logalert=(str)=>{
    document.getElementById('log-notify').innerHTML=`<div class="notification-item" ">
    <img width="30px" src="./src/error.png" alt="" srcset=""><p>${str}</p> 
 </div>`
}
const mapsugg = ()=>{
    document.getElementById('sugg-ul').innerHTML="";
    sugg.map((val,key)=>{
        document.getElementById('sugg-ul').innerHTML = document.getElementById('sugg-ul').innerHTML+`<li onclick="searchdoctors('${val.suggestion}')">${val.suggestion}</li>`
    })
}
const populatesuggestion= (city)=>{
    getsuggestions(city).then(val=>{
        sugg = val.results.default.matches
        mapsugg()
    })
}
const searchdoctors = (location)=>{
hideall()
document.getElementById('sugg_input').value = location
console.log(location,city)
}