function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);
 
    if (document.getElementById("user_name").value = ""){
        window.alert("please enter your name")
    }
    else{

        window.location = "invitation.html";

    }
}
