
let number;
const genetateNum = ()=>{
    
    // let n1= Math.random();
    // let n2=n1*10;
    // let n3=Math.trunc(n2);
    // number=n3;
    // console.log(number);

    let n4=Math.trunc(Math.random()*10);
    number=n4;
    console.log(number)
    
};


const check_Num_btn_click=()=>{

    

    document.querySelector('#section1').style.display="none";
    document.querySelector("#section2").style.display="none";
    document.querySelector("#section3").style.display="block";

    setTimeout(()=>{
        genetateNum();
        document.getElementById("field").value="";
    document.querySelector('#section1').style.display="none";
    document.querySelector("#section2").style.display="block";
    document.querySelector("#section3").style.display="none";

    },3000);

};

const check_num=()=>{

    let num=document.getElementById("field").value;
   
    if(number==num){
        alert("Right Number..")
    }else{
        alert("Oops wrong number..")
    }

    check_Num_btn_click();
}

