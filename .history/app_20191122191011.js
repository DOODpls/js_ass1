const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// Instructions
// Take the data above and display it as tiles on the page
        //tried to do sort, but i suck
        // const button1 = document.querySelector('body section .container')
        // const btn1 = document.createElement('button')
        // btn1.className= 'buy-button'
        // btn1.id = "butt1"
        // button1.appendChild(btn1)

        // function sort1(){
        //     data.sort((a, b) => (a.topic > b.topic) ? 1 : -1)
        // }
        
        // const button2 = document.querySelector('#butt1')
        // button2.addEventListener('click', function(event) {
        //     sort1()
        // })

    for(i=0; i<data.length; i++){
        let heig
        

        const tilers = document.querySelector('#content')
        const divr = document.createElement('div')
        divr.className= 'card'
        divr.style.backgroundColor = data[i].color
        divr.style.height = heig
        divr.id = 'divtile'+ i
        tilers.appendChild(divr)
        if(i == 0){
          divr.style.width = "400px"
        } else if(i == 5) {
          divr.style.width = "400px"
        } else {
          divr.style.height = "300px"
        }
        const p1 = document.querySelector('#divtile'+i)
        const pr1 = document.createElement('p')
        pr1.textContent = data[i].topic
        pr1.className= 'topic'
        p1.appendChild(pr1)

        const p2 = document.querySelector('#divtile'+i)
        const pr2 = document.createElement('p')
        pr2.textContent = data[i].title
        pr2.className= 'title'
        p2.appendChild(pr2)

        const btn1 = document.querySelector('#divtile'+i)
        const btr2 = document.createElement('button')
        btr2.textContent = data[i].price
        btr2.className= 'buy-button'
        btn1.appendChild(btr2)
    }

    // data.forEach(function(item)
    // {
    //     const tilers = document.querySelector('#content')
    //     const divr = document.createElement('div')
    //     divr.className = 'card'
    //     divr.style.backgroundColor = item.color
    //     tilers.appendChild(divr)

    //     const pr1 = document.createElement('p')
    //     pr1.textContent = item.topic
    //     pr1.className= 'topic'
    //     divr.appendChild(pr1)

    //     const pr2 = document.createElement('p')
    //     pr2.textContent = item.title
    //     pr2.className= 'title'
    //     divr.appendChild(pr2)

    //     const btr2 = document.createElement('button')
    //     btr2.textContent = item.price
    //     btr2.className= 'buy-button'
    //     divr.appendChild(btr2)
    // })
        
    
    //this one also works lolllll
    // data.forEach(function(items)
    // {
    // //   document.getElementById('content').innerHTML += '<div class="card" style="background-color:'+items.color+'"><p class="topic">'+items.topic+'</p><p class="title">'+items.title+'</p><button class="buy-button">'+items.price+'</button></div>';
    // })
        
   
   