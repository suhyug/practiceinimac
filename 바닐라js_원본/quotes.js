const quotes = [

{
    quote:"그냥 잘 놀다 오갰습니다",
    author: "무한도전",
},
{
    quote:"안녕 못해",
    author: "박명수",
},
{
    quote:"빨리하고 가고싶어",
    author: "박명수",
},
{
    quote:"네가 왜 내 미래를 결정해",
    author: "정준하",
},
{
    quote:"인생을 좀 가볍게 살았으면 좋겠어요",
    author: "법률스님",
},
{
    quote:"되는 놈은 됩니다!",
    author: "박명수",
},
{
    quote:"무덤덤하게 하강",
    author: "무한도전",
},
{
    quote:"나 6천원 있어요...",
    author: "유재석",
},
{
    quote:"때를 기다려!",
    author: "박명수",
},
{
    quote:"(당당)사람의 생각이란 바뀌는 거지...",
    author: "박명수",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() *  quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//0부터 1사이의 랜덤 숫자
//우리는 1부터 10까지의 정수가 필요함(round, floor, ceil)
//floor를 쓰는 이유는 array의 마지막은 length-1이니까