window.onload = function (){
     var lookup = document.getElementById("lookup");
     lookup.addEventListener("click",search);
     
     
     var searchAll = document.getElementById('all');
     var newReq = new XMLHttpRequest();
     var out = document.getElementById("result");
     
     
     
     var searchInput = document.getElementById('country');
     var url = "https://info2180-lab7-sajaybailey.c9users.io/world.php?country=";
     
     
     function search (){
         //alert(searchInput.value);
        newReq.open("GET","url"+ searchInput.value, true);
        newReq.send();
         
         newReq.onreadystatechange = function(){
             if (newReq.readyState===4 && newReq.status===200){
                 out.innerHTML = newReq.responseText;
                 //alert(newReq.responseText);
             }
             else{
                 alert(newReq.status);
             }
         }
        
     }
}