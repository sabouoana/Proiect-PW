let userAdded = new Array();


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
        success: function (data) {
            for (i = 0; i < data.length; i++) {
               console.log(data[i]);
          }
        }
    });

    //console.log(userAdded);

}

function SaveUser() {

    console.log(userAdded);

    $.ajax({
        type: "POST",
        url: "/SaveUser",
        data: {user: userAdded},
        success: function (data) {
            console.log(data);
            while (userAdded.length > 0)
            userAdded.pop();
        }
    });

    console.log(userAdded);

}