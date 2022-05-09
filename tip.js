//tip calculator

var button = document.getElementById('submit');

var bill= document.getElementById('bill');
var ppl= document.getElementById('ppl');
var review= document.getElementById('review');

var er= document.getElementById('errors'); 
var er1= document.getElementById('error1');
var er2= document.getElementById('error2');
var er3= document.getElementById('error3');

var result= document.getElementById('result');

var total= document.getElementById('total');
var tip= document.getElementById('tip');
var per= document.getElementById('perppl');

function check()
{
    var flag= 0;
    if(bill.value === '')
    {
        er.className= '';
        er1.className= '';
        flag= flag + 1;
    }
    if(parseInt(ppl.value) <= 0 || ppl.value === '')
    {
        er.className= '';
        er2.className= '';
        flag= flag + 1;
    }
    if(review.value === 'choose')
    {
        er.className= '';
        er3.className= '';
        flag= flag + 1;
    }
    return flag;
}
addEvent(button, 'click', function(e){
    e.preventDefault();
    var disc=0; 
    
    er.className= 'hide';
    er1.className= 'hide';
    er2.className= 'hide';
    er3.className= 'hide';
    result.className= 'hide';
    
    if(check() === 0)
    {
        if(review.value === 'great')
        {
            disc= 20;
        }
        else if(review.value === 'good')
        {
            disc= 10;
        }
        else if(review.value === 'bad')
        {
            disc= 2;
        }
       
        result.className = '';

        var ti = (parseInt(bill.value)*disc)/100.0;
        var to =  parseFloat(bill.value) + parseFloat(ti);
        tip.innerHTML= 'Tip: ' + ti + '$';
        total.textContent= 'Total Amount: ' + to + '$';
        per.textContent= 'Amount per person: ' + parseFloat(to)/parseFloat(ppl.value) + '$';
    }
});