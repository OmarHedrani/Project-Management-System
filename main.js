let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discound = document.getElementById('discound');
let total = document.getElementById('total');
let count = document.getElementById('count');
let Gategory = document.getElementById('Gategory');
let Search = document.getElementById('Search');
let submit = document.getElementById('submit');


//function get total
function gettotal(){
    if(price.value != '')
    {
        let reslut = (+price.value + +taxes.value + +ads.value) - (+discound.value);
        total.innerHTML = reslut ;
total.style.backgroundColor = 'green';
    }else{
        total.innerHTML = '';
        total.style.backgroundColor ='red';
    };
};
//function creat
//let alldata = [];

let alldata  ;
if(localStorage.product != null){
    alldata = JSON.parse(localStorage.product)
}else{
    let alldata = [] ;
   
}


///////////////alllllllllllll
submit.onclick = function(){
    let newproduct ={
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discound : discound.value,
        total : this.innerHTML,
        count : count.value,
        Gategory : Gategory.value ,
    
    }
  
    alldata.push(newproduct)
    localStorage.setItem('product',JSON.stringify(alldata))
   cleardata()
    readata()
   
}




// clear data 
function cleardata(){
    title.value = '';
    price.value = '';
    ads.value = '';
    discound.value = '';
    count.value = '';
    taxes.value = '';
    Gategory.value = '';
    total.innerHTML = '';
};

//read data
function readata(){
    let tabal = '';
    for(let i=0 ; i < alldata.length ;i++){
        tabal += `
        <tr>
        <td>${i}</td>
        <td>${alldata[i].title}</td>
        <td>${alldata[i].price}</td>
        <td>${alldata[i].taxes}</td>
        <td>${alldata[i].ads}</td>
        <td>${alldata[i].discound}</td>
        <td>${alldata[i].total}</td>
        <td>${alldata[i].Gategory}</td>
        <td> <button id="update"> update</button></td>
        <td> <button  onclick =" deleteproduct(${i})" id="delete"> delete</button></td>
    </tr>
`

    }
    document.getElementById('tbody').innerHTML = tabal ;

    let btndeleteall = document.getElementById('btndeleteall');
    if (alldata.length > 0){
btndeleteall.innerHTML = `
 <button onclick ="FdeleteAll()"> DeleteAll</button>
`
    }else{
btndeleteall.innerHTML = ''
    }
    
}
readata()
///delete data
function deleteproduct(i){
    alldata.splice(i,1)
    localStorage.product = JSON.stringify(alldata)
    readata()
};
///delete all data
/*
function FdeleteAll(){
    localStorage.clear()
    alldata.splice(0)
}
///update data */