//received_data  = null;s
function process_res(data) {
    received_data = data
    console.log(data)
    $("#result").html(JSON.stringify(data));
}


function findUnicornByName() {
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val())

    $.ajax(
        {
            url: "https://secure-hamlet-37695.herokuapp.com/findUnicornByName",
            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
            },
            success: process_res
        }
    )
}
//

function findUnicornByFood() {
    carrotIsChecked = "unchecked"
    appleIsChecked = "unchecked"
    if ($("#carrot").is(":checked"))
        carrotIsChecked = "checked"

    if ($("#apple").is(":checked"))
        appleIsChecked = "checked"

    $.ajax(
        {
            url: "https://secure-hamlet-37695.herokuapp.com/findUnicornByFood",
            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            success: process_res
        }
    )
}

function unicornNameFilter() {
    nameIsChecked = "unchecked"
    weightIsChecked = "unchecked"
    if ($("#unicornNameFilter").is(":checked"))
        nameIsChecked = "checked"

    if ($("#unicornWeightFilter").is(":checked"))
        weightIsChecked = "checked"

    $.ajax(
        {
            url: "https://secure-hamlet-37695.herokuapp.com/unicornNameFilter",
            type: "POST",
            data: {
                "nameIsChecked": nameIsChecked,
                "weightIsChecked": weightIsChecked
            },
            success: process_res
        }
    )
}
//
function setup() {
    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#filter").click(unicornNameFilter)
}

// function filter(){
//     received_data.map(function (obj_){
//         aList = []
//         if( // if the name check box is checked)
//             aList.push("name")
//         return aList
//     })
// }


$(document).ready(setup)