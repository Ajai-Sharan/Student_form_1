var inpName = document.getElementById("inpName");
var inpAge = document.getElementById("inpAge");
var inpEmail = document.getElementById("inpEmail");
var infoTable = document.getElementById("infoTable");
var selectedGender = "";
var selectedCourse = "";


function selectGender(event){
    selectedGender = event.target.value;
}

function selectCourse(event){
    selectedCourse = event.target.value;
}

function deletefunc(event){
    var tr = event.target.closest('tr');

    // Remove the <tr> from the table
    if (tr) {
        tr.parentNode.removeChild(tr);
    }
}




function update(){

    var inpNameVal = inpName.value;
    var inpAgeVal = inpAge.value;
    var inpEmailVal = inpEmail.value;

    var updateTr = document.createElement("tr");
    var tdName = document.createElement("td");
    tdName.textContent = inpNameVal;
    updateTr.append(tdName);

    var tdAge = document.createElement("td");
    tdAge.textContent = inpAgeVal;
    updateTr.append(tdAge);

    var tdCourse = document.createElement("td");
    tdCourse.textContent = selectedCourse;
    updateTr.append(tdCourse);

    var tdGender = document.createElement("td");
    tdGender.textContent = selectedGender;
    updateTr.append(tdGender);
    
    var tdEmail = document.createElement("td");
    tdEmail.textContent = inpEmailVal;
    updateTr.append(tdEmail);

    var tdAction = document.createElement("td");
    tdAction.innerHTML = "<button onclick='deletefunc(event)' style='background-color: red;'>delete</button>"
    updateTr.append(tdAction);

    infoTable.appendChild(updateTr);

}


