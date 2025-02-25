const LiveDate = new Date()
// console.log(LiveDate.toDateString());
// console.log(LiveDate.toISOString);
// console.log(LiveDate.toJSON());
// console.log(LiveDate.toLocaleDateString());
// console.log(LiveDate.getDate());
let ParticularDate = new Date(2002,0,8,1,45);
// console.log(ParticularDate.toLocaleString())
const MyBdate = new Date("01-08-2002")
// console.log(MyBdate.toLocaleString());
// const PresentTime =Date.now()
// console.log(PresentTime);
// const PresentTimeSec = Math.floor(PresentTime/1000)
// console.log(PresentTimeSec);
// console.log(Math.floor(PresentTimeSec/60))

// console.log(MyBdate.getTime());

console.log(MyBdate.toLocaleString('default',{
    // weekday : "long",
    dateStyle :"full"
}))


