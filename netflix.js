let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container")
let box1 = document.querySelector(".box1")
let topRated = document.querySelector("#top-rated")
let boxes = document.querySelector(".boxes")
let heart = document.querySelectorAll(".ri-poker-hearts-line")
let fav = document.querySelector("#fav")
let fill = document.querySelector(".ri-poker-hearts-fill")
let select = document.querySelector("#select")
let home = document.querySelector("#home")




let array = [
    {
        title :"Beyond Mars",
     genres :"Sci-Fi ",
     rating:   8.7  ,
     favorite :  false,
    img : "shadow.png"
  },
  {
        title :"Campus Chaos",
     genres :"Comedy",
     rating:   8.4  ,
     favorite :  false, 
     img :"Campus Chaos.png"
  },
   {
        title :"Spring Letter",
     genres :"Romance",
     rating:   8.7  ,
     favorite :  false, 
       img:"spring letter.png"
  },
     {
        title :"Worlds Unwritten",
     genres :"Action/Adventure",
     rating:   8.3  ,
     favorite :  false, 
      img:"worlds.png"
  },
   {
        title :"Dark Tunnel",
     genres :"Thriller",
     rating:   7.5 ,
     favorite :  false, 
     img:"dark.png"
  },
   {
        title :"Neon Hunter",
     genres :"Action/Sci-Fi",
     rating:   8.6 ,
     favorite :  false, 
     img : "hunter.png"

  },
   {
        title :"Mission Possible",
     genres :"Action/Comedy",
     rating:   7.4 ,
     favorite :  false, 
     img : "mission.png"

  },
   {
        title :"Seoul Melody",
     genres :"Romance/Drama",
     rating:   7.1  ,
     favorite :  false, 
     img : "melody.png"

  },
   {
        title :"Forgotten Face",
     genres :"Mystery / Thriller",
     rating:   8.5  ,
     favorite :  false, 
  img : "face.png"
  },
   {
        title :"Midnight Code",
     genres : " Action / Crime",
     rating:   9.1  ,
     favorite :  false, 
    img : "code.png"
  },
]


        // Search Movie //
button.addEventListener("click",()=>{
 let found = array.find((item)=>{
        return item.title.toLowerCase() === input.value.toLowerCase()

    })
   
     if(found){
      container.innerHTML = `<div class="box1">
                           <img src="${found.img}" alt="">
                           <h5>${found.title}</h5>
                           <span class="spn">${found.genres}</span>
                         <h6>⭐ ${found.rating} </h6>

                          </div>`;
     }else{
         container.innerHTML = "not Found"
     }
})


        //top Rated //
 topRated.addEventListener("click",()=>{
  let rate = array.filter((item)=>{
     return item.rating >= 8.5

   })
   boxes.innerHTML = ""
   rate.forEach((item)=>{
     
       boxes.innerHTML += `<div class="box1">
                           <img src="${item.img}" alt="">
                           <h5>${item.title}</h5>
                            <span class="spn">${item.genres}</span>
                         <h6>⭐ ${item.rating} </h6>
                          <i class="${item.favorite ? 'ri-poker-hearts-fill' : 'ri-poker-hearts-line'}"></i>
                        
                          </div>`;
   })
   
})

     // favorite feature//
heart.forEach((icon,index)=>{
      icon.addEventListener("click",()=>{

         if(array[index].favorite === false){
            array[index].favorite = true
       icon.classList.remove("ri-poker-hearts-line")
      icon.classList.add("ri-poker-hearts-fill")
        }else{
             array[index].favorite = false
              icon.classList.add("ri-poker-hearts-line")
            icon.classList.remove("ri-poker-hearts-fill")
         }
    })
})
fav.addEventListener("click",()=>{
   let favMovie = array.filter((item)=>{
     return item.favorite === true
   })
      boxes.innerHTML =""
    favMovie.forEach((item)=>{
         boxes.innerHTML += `<div class="box1">
                           <img src="${item.img}" alt="">
                           <h5>${item.title}</h5>
                            <span class="spn">${item.genres}</span>
                         <h6>⭐ ${item.rating} </h6>
                           <i class="${item.favorite ? 'ri-poker-hearts-fill' : 'ri-poker-hearts-line'}"></i>
                          </div>`;
    })
   })
      // Movie filter feature //
   
    select.addEventListener("click",()=>{
       let value = select.value
     let choose = array.filter((item)=>{
       return item.genres.includes(value) 
      })
      container.innerHTML=""
     choose.forEach((item)=>{
        container.innerHTML += `<div class="box1">
                           <img src="${item.img}" alt="">
                           <h5>${item.title}</h5>
                            <span class="spn">${item.genres}</span>
                         <h6>⭐ ${item.rating} </h6>
                       <i class="${item.favorite ? 'ri-poker-hearts-fill' : 'ri-poker-hearts-line'}"></i>
                          </div>`;
      })
      
    })
    //show all Movie //
home.addEventListener("click",()=>{
   boxes.innerHTML=""
    array.forEach((item)=>{
      boxes.innerHTML+= `<div class="box1">
                           <img src="${item.img}" alt="">
                           <h5>${item.title}</h5>
                            <span class="spn">${item.genres}</span>
                         <h6>⭐ ${item.rating} </h6>
                       <i class="${item.favorite ? 'ri-poker-hearts-fill' : 'ri-poker-hearts-line'}"></i>
                          </div>`;
    })
})