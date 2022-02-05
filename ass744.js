var counter = document.getElementById('clc');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');
var sum = 0; 
var add = null;
var sub = null;

increase.addEventListener('click', set)
function set(){
   clearInterval(sub);
    increase = true;
    decrease = false;
    function startInterval(){
        add = setInterval(function()  {
            sum++;
            counter.innerHTML = sum;
        }, 1000);
    }
    startInterval();
}
decrease.addEventListener('click', let);
function let (){
   clearInterval(add);
    increase = false;
    decrease= true;
    function startInterval(){
        sub = setInterval( function()  {
        sum--;
        counter.innerHTML = sum;
    }, 1000);
    }
    startInterval();
}
