let email_Input = document.getElementById('InputEmail');
let password_Input = document.getElementById('InputPassword');
let postal_Input = document.getElementById('InputPostal');

let show_Email_Validation = document.getElementById('ShowEmail');
let show_Password_Validation = document.getElementById('ShowPassword');
let show_Postal_Validation = document.getElementById('ShowPostal');

let RE_For_Email = /^[a-zA-Z0-9._]{5,}@[a-zA-Z]{5,}[.]{1}[a-zA-Z.]{3,6}$/;
let RE_For_Password= /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
let RE_For_Postal =  /^\d{4}$/;

let btn = document.getElementById("btn_submit");

btn.addEventListener('click',()=>{
    if(email_Input.value==""){
        show_Email_Validation.textContent="";
    }else{
        if(RE_For_Email.test(email_Input.value)){
            show_Email_Validation.textContent=`It's a Valid Email Address`;
            setTimeout(()=>{
                show_Email_Validation.textContent="";
            },3050);
        }else{
            show_Email_Validation.textContent="It's an Invalid Email Address";
            setTimeout(()=>{
                show_Email_Validation.textContent="";
            },3050);
        }
    }

    if(password_Input.value==""){
        show_Password_Validation.textContent="";
    }else{
        if(RE_For_Password.test(password_Input.value)){
            show_Password_Validation.textContent=`It's a Valid Password`;
            setTimeout(()=>{
                show_Password_Validation.textContent="";
            },3050);
        }else{
            show_Password_Validation.textContent="It's an Invalid Password";
            setTimeout(()=>{
                show_Password_Validation.textContent="";
            },3050);
        }
    }

    if(postal_Input.value==""){
        show_Postal_Validation.textContent="";
    }else{
        if(RE_For_Postal.test(postal_Input.value)){
            show_Postal_Validation.textContent=`It's a Valid Postal Code`;
            setTimeout(()=>{
                show_Postal_Validation.textContent="";
            },3050);
        }else{
            show_Postal_Validation.textContent="It's an Invalid Postal COde";
            setTimeout(()=>{
                show_Postal_Validation.textContent="";
            },3050);
        }
    }
});