function display(num){
    var txt=document.querySelector("#txtbox")//grabing text box
    txt.value+=num; //to change value of text box when number entered
//+= used becaus we need to display the values together so concatenate
}

function solve(){
    var txt=document.querySelector("#txtbox");
    let res=eval(txt.value);
    txt.value=res;
}

function clearbox(){
    document.querySelector("#txtbox").value=""
}
