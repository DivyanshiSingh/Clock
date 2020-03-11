const secondHand=document.querySelector('.sec_hand');
const minHand=document.querySelector('.min_hand');
const hourHand=document.querySelector('.hour_hand');
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secDegrees}deg)`;

    const minutes=now.getMinutes();
    const minDegrees=((minutes/60)*360)+90;
    minHand.style.transform=`rotate(${minDegrees}deg)`;

    const hours=now.getHours();
    const hourDegrees=((hours/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000)