const quotes = [

{
    quote:"신분상승은 나의...모토",
    author: "-박명수",
},
{
    quote:"사람 일이 어떻게 될 줄 모르는 거니까",
    author: "-박명수",
},
{
    quote:"빨리하고 가고싶어",
    author: "-박명수",
},
{
    quote:"네가 왜 내 미래를 결정해",
    author: "-정준하",
},
{
    quote:"화끈하게 놀아보자",
    author: "-박명수",
},
{
    quote:"되는 놈은 됩니다!",
    author: "-박명수",
},
{
    quote:"오래 한다고 나오는 게 아니거든요!",
    author: "-박명수",
},
{
    quote:"(당당)사람의 생각이란 바뀌는 거지...",
    author: "-박명수",
},
{
    quote:"때를 기다려!",
    author: "-박명수",
},
{
    quote:"전문가에게 맡기면 편할 텐데...",
    author: "-박명수",
},
{
    quote:"(하핫)하면 되네요~",
    author: "-유재석",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() *  quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//0부터 1사이의 랜덤 숫자
//우리는 1부터 10까지의 정수가 필요함(round, floor, ceil)
//floor를 쓰는 이유는 array의 마지막은 length-1이니까