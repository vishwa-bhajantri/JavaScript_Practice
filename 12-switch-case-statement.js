var role = "SE";

switch (role) {
    case "Trainee":
        console.log("He is a fresher");
        break;
    case "SE":
        console.log("he is a software engineer");
        break;
    case "SSE":
        console.log("he is a senior software engineer");
        break;
    case "TL":
        console.log("he is a Team Lead");
        break;
    case "Asst.MGR":
        console.log("he is a Assistant Manager");
        break;
    case "MGR":
        console.log("he is a Manager");
        break;
    default:
        console.log("record is not matching");
}

//switch case within function
function getUserRole(role){
    switch(role){
        case "admin":
            console.log("he is an administrator");
            break;
        case "salesrep":
            console.log("he is an sales representative");
            break;
        case "enduser":
            console.log("he is an enduser");
            break;
        default:
            console.log("record is not found");
            break;
    }
}
getUserRole("salesrep");