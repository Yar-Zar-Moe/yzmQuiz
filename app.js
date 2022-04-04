question=[
    
   

    {
        image: "https://images.foxtv.com/static.fox5ny.com/www.fox5ny.com/content/uploads/2022/02/1280/720/Koala-baby.jpg?ve=1&tl=1",
        
        answer1: "Snake",
        answer2 : "Owl",
        answer3 : "Fox",
        answer4 : "Koala",
    },
    {
        image: "https://wallpaperaccess.com/full/1403059.jpg",
        answer1: "Ant",
        answer2 : "Sparrow",
        answer3 : "Humming bird",
        answer4 : "Chicken",
    },
    {
        image: "https://images.hdqwalls.com/download/old-lion-of-1280x720.jpg",
        answer1: "Lion",
        answer2 : "Parrot",
        answer3 : "Pig",
        answer4 : "Panda",
    },

    {
        image: "https://motaen.com/upload/resize/1280/720/upload/wallpapers/source/2009/10/23/10/02/20601/mota_ru_9102315-696.jpg",
        answer1: "Mouse",
        answer2 : "Ocar Whale",
        answer3 : "Horse",
        answer4 : "Shark",
    },
    {
        image: "https://eskipaper.com/images/sea-turtle-3.jpg",
        answer1: "Octopus",
        answer2 : "Pig",
        answer3 : "Water-dragon",
        answer4 : "Sea tortal",
    },

    {
        image: "https://s.rfi.fr/media/display/87dc8b34-1274-11ea-9210-005056a99247/w:1280/p:16x9/king_penguins.jpg",
        answer1: "Penguin",
        answer2 : "Snake",
        answer3 : "Fox",
        answer4 : "Donkey",
    },
    {
        image: "https://free4kwallpapers.com/uploads/wallpaper/bald-eagle-wallpaper-1280x720-wallpaper.jpg",
        answer1: "Eagle",
        answer2 : "Sparrow",
        answer3 : "Dog",
        answer4 : "Henya",
    },
    {
        image: "https://www.zastavki.com/pictures/1280x720/2011/Animals___Beasts_Giraffe_029135_26.jpg",
        answer1: "Griaffe",
        answer2 : "Sparrow",
        answer3 : "Zebra",
        answer4 : "Dog",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Polar_bear_near_Sju%C3%B8yane_with_a_typical_gesture_assessing_the_situation.jpg/1280px-Polar_bear_near_Sju%C3%B8yane_with_a_typical_gesture_assessing_the_situation.jpg",
        answer1: "Black bear",
        answer2 : "Wolf",
        answer3 : "Polar bear",
        answer4 : "Parrot",
    },
]

let button=document.querySelector("#nextButton");
let card = document.querySelector("#Question");
let cardContainer = document.querySelector("#card")
let answers = document.querySelectorAll(".answer");
let chooseBtn= document.querySelectorAll(".btn");
let score = document.querySelector("#scoreCard");
let startBtn=document.querySelector("#start");
let footer = document.querySelector("#Footer");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");
let yourScore = document.getElementById("yourScore");
let porgessBar = document.getElementById("ProgressBar");

let restartBtn=document.querySelector("#restart");
let animal = [];
let finalScore = 0 ;

startBtn.addEventListener("click" ,() =>{
    cardContainer.style.display="block";
    startBtn.style.display = "none";
})

restartBtn.addEventListener("click" ,()=>{
    window.location.reload();
})

answers.forEach(btn =>{btn.addEventListener("click" , ()=>{
    animal.push(btn.innerHTML);
    btn1.classList.add("disabled");
    btn2.classList.add("disabled");
    btn3.classList.add("disabled");
    btn4.classList.add("disabled");
    button.classList.remove("disabled");

})})

console.log(animal.length);

let iterator = (que) =>{
    let index = 0;
    return {
        next : () =>{
            return index < que.length ? {value : que[index++] , done :false} : {done : true}
        }
    }
}
let j=0;
let quest = iterator(question);

button.addEventListener("click" , () =>{
   
    let quest2 = quest.next();
    if(!quest2.done){
        let str = `
        <img src="${quest2.value.image}" class="img-thumbnail img-fluid" alt="">


        `
        card.innerHTML = str;
        btn1.innerHTML = `${quest2.value.answer1}`
        btn2.innerHTML = `${quest2.value.answer2}`
        btn3.innerHTML = `${quest2.value.answer3}`
        btn4.innerHTML = `${quest2.value.answer4}`
        btn1.classList.remove("disabled");
        btn2.classList.remove("disabled");
        btn3.classList.remove("disabled");
        btn4.classList.remove("disabled");
        button.classList.add("disabled");
    }else{
        for(let i=0 ; i<animal.length;i++ ){
            if(animal[i] == "Koala" || animal[i] == "Humming bird" || animal[i] == "Lion" || animal[i] == "Ocar Whale" || animal[i] == "Sea tortal" ||animal[i] == "Penguin" || animal[i] == "Eagle" || animal[i] == "Griaffe" || animal[i] == "Polar bear" || animal[i] == "Tiger"){
                finalScore +=1
                
            }
        }


        yourScore.innerHTML = '<i class="fa-solid fa-crown queen"></i>' + " " + "Your score is"+ " " + `${finalScore}` + "/" + "10";
        cardContainer.style.display = "none";
        score.style.display = "block";
    }


})
