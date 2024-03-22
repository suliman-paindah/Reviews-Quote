let itemContent =[
    {
        image:'../../images/girl.jpg',
        name:'Milad Muradi',
        job:'Mobile Application deve',
        info:'Mr Milad is study computer science in kabul university and get work at ' +
            'etisalt company now he leave the university perfonmace his occapation',

    },
    {
        image:'../../images/2.jpg',
        name:'Jafer Nabizadah',
        job:'Data base developer',
        info:'Mr Jafer is study computer science in kabul university and get work at ' +
            'etisalt company now he is in  the university perfonmace his occapation',

    },
    {
        image:'../../images/1.jpg',
        name:'Hafez Ahmadi',
        job:'Mobile Engineer',
        info:'Mr Milad is study computer science in kabul university and get work at ' +
            'etisalt company now he leave the university perfonmace his occapation',

    },
    {
        image:'../../images/4.jpg',
        name:'Milad Muradi',
        job:'Mobile Application deve',
        info:'Mr Milad is study computer science in kabul university and get work at ' +
            'etisalt company now he leave the university perfonmace his occapation',

    }
]
// here all contents
const image = document.querySelector('.image')
const name = document.querySelector('.name')
const job = document.querySelector('.job')
const info = document.querySelector('.info')

// here all buttons
const btnPrev = document.querySelector('.btnPrev')
const btnNext = document.querySelector('.btnNext')
const btnRandom = document.querySelector('.btnRandom')


let itemIdx = 0;

btnRandom.addEventListener('click',function (){
    let randomNum = Math.floor(Math.random() * itemContent.length)
    let obj = itemContent[randomNum]
    image.src = obj.image;
    name.innerText = obj.name;
    job.innerText = obj.job;
    info.innerText = obj.info;

})

btnNext.addEventListener('click',function (){
    itemIdx++;
    if(itemIdx > itemContent.length - 1){
        itemIdx = 0
    }
    changeContent();
})

btnPrev.addEventListener('click',function (){
    if(itemIdx == 0){
        itemIdx = 0
    }
    itemIdx--;
    changeContent();
})

function changeContent(){
    let obj = itemContent[itemIdx]
    image.src = obj.image;
    name.innerText = obj.name;
    job.innerText = obj.job;
    info.innerText = obj.info;
}
