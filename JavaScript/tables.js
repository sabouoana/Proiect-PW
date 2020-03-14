let userAdded = new Array();
let createUser = new Array();

// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "/updateTable",
//         success: function (data) {
//             for (i = 0; i < data.length; i++) {
//                 makeTable(data[i].x, data[i].y, data[i].nr);
//             }
//         }
//     });
//     reDrawTables();
// });
function getUsers() {

    console.log(userAdded);

    $.ajax({
        type: "GET",
        url: "/GetUser",
        success: function(data) {
            for (i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
        }
    });

    //console.log(userAdded);

}

function SaveUser() {

    console.log(userAdded);
    userAdded[0] = getElementById("idUser").value;
    userAdded[1] = getElementById("userPassword").value;
    $.ajax({


        type: "POST",
        url: "/SaveUser",
        data: { user: userAdded },
        success: function(data) {
            console.log(data);
            while (userAdded.length > 0)
                userAdded.pop();
        }
    });

    console.log(userAdded);

}

function createUserFunction() {
    if (document.getElementById("buttonCreateUser").click == true) {
        createUser[0] = getElementById("firstName");
        createUser[1] = getElementById("secondName");
        createUser[2] = getElementById("userEmail");
        createUser[3] = getElementById("vehicle");
        createUser[4] = getElementById("createPsw");
        createUser[5] = getElementById("re-enterPsw");
    }
    console.log(createUser);
}