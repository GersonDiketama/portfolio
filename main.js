var timeLine = new TimelineMax();

timeLine
.from('.apple-icon',4,{ opacity:1 }).to('.apple-icon',3,{ opacity:0 })

.from('.text',1,{opacity:1}).to('.text',1,{opacity:0})

.from('.text-1',1,{opacity:1}).to('.text-1',1,{opacity:0})

.from('.text-2',1,{opacity:1}).to('.text-2',1,{opacity:0})


.from('.text-3',1,{opacity:0}).to('.text-3',2,{opacity:1})



// helo