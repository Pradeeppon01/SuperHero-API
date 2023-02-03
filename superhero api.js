const superherotoken='120340270944240'
const imagediv=document.getElementById('imagediv')
const searchbutton=document.getElementById('searchbutton')
const baseurl=`https://superheroapi.com/api.php/${superherotoken}`
const searchname=document.getElementById('searchname')

const getsuperhero=(id, name)=>{
  fetch(`${baseurl}/${id}`)
 .then(response=>response.json())
  .then(json=>{
    console.log(json.powerstats)
    const powerstatsstring=JSON.stringify(json.powerstats)
    imagediv.innerHTML=`<h1>${json.name}</h1><img src='${json.image.url}' width=200 height=auto/><h3>${powerstatsstring}</h3>`
    
  })
}

const getsearchedsuperhero=(name)=>{
  fetch(`${baseurl}/search/${name}`)
  .then(response=>response.json())
  .then(json=>{
    getstatshtml(json)
     const hero=json.results[0]
    const powerstatsstring=JSON.stringify(hero.powerstats)
    imagediv.innerHTML=`<h1>${hero.name}</h1><img src='${hero.image.url}' width=200 height=auto/><h3>`
    
    console.log(hero.image.div)
  })
}

const getstatshtml=(character)=>{
 console.log(Object.keys(character.powerstats))
}

var newhero=document.getElementById('newhero')
newhero.onclick=()=>{
  number=(Math.floor(Math.random()*731))
  console.log(number)
  getsuperhero(number)
}

searchbutton.onclick=()=>{
  console.log('hi')
 let name=searchname.value
  getsearchedsuperhero(name)
}
  