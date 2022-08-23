const ol = document.getElementById("ol");

const myModal = document.getElementById("warningModal");

function buttonClick(e) {
    const li = document.createElement("li");
    const playerName = e.parentNode.children[0].innerText;

    if (ol.childNodes.length < 5) {
        ol.appendChild(li);
        li.innerHTML = playerName;
        e.disabled = true;
        e.classList.add("button-disabled");
        e.innerText = "Selected";
    } else {
        $("#warningModal").modal("show");
    }
}

document
    .getElementById("calculateButton")
    .addEventListener("click", function () {
        const perPlayerField = document.getElementById("perPlayerField").value;
        const perPlayerFieldValue = parseFloat(perPlayerField);

        const playerExpenses = document.getElementById("playerExpenses");
        const totalPlayerExpenses = (playerExpenses.innerHTML =
            perPlayerFieldValue * ol.childNodes.length);
    });
document
    .getElementById("calculateTotal")
    .addEventListener("click", function () {
        const perPlayerField = document.getElementById("perPlayerField").value;
        const perPlayerFieldValue = parseFloat(perPlayerField);

        const playerExpenses = document.getElementById("playerExpenses");
        const totalPlayerExpenses = (playerExpenses.innerHTML =
            perPlayerFieldValue * ol.childNodes.length);

        const manager = document.getElementById("manager").value;
        const managerValue = parseFloat(manager);

        const coach = document.getElementById("coach").value;
        const coachValue = parseFloat(coach);

        const total = totalPlayerExpenses + managerValue + coachValue;

        const totalAmount = document.getElementById("total");
        totalAmount.innerHTML = total;
    });
