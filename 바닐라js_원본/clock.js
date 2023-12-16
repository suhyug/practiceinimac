const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//즉시 호출해서 바로 시간이 뜨게 하기 위해서
setInterval(getClock, 1000);
//매초 마다 보이기 위해서 이 함수를 사용
