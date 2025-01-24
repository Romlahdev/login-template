


    const login = document.querySelector(".login-page");

    const loading = document.querySelector(".loading-page");

    const welcome = document.querySelector(".welcome-page");

    const incorrect = document.querySelector(".incorrect-page");
    
    const password = document.querySelector("#password");

    var enter = document.querySelector("#login-btn");

    var btn = document.querySelector("#incorrect-btn")


    
    var correctpassword = "dada"



    enter.addEventListener("click", function(){

        const value = password.value;
        console.log(value)

        login.style.display="none";

        if(value == correctpassword){

            loading.style.display="flex";


            setTimeout(() => {
           
                loading.style.display="none";
                
                welcome.style.display="flex"

            }, 5000);


        }else{

            loading.style.display="flex";

            incorrect.style.display="none";
            
            setTimeout(() => {
                    
                loading.style.display="none";

                incorrect.style.display="flex";

            }, 5000);

            


        };
        

    })


    btn.addEventListener("click", function(){

        incorrect.style.display="none";

        login.style.display="flex"

    })