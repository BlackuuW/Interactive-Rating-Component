let thanks = document.getElementById("thank_you");
let main = document.getElementById("main");
thanks.style.display = "none"

document.getElementById("submit").addEventListener("click", function () {

    let checkedRadio = document.querySelector("input[name='ratingOption']:checked");
    let chosenRating = Number(checkedRadio.value);
    let selection = document.getElementById("selection");
    selection.innerHTML = "";

    switch (chosenRating) {
        case 1:
            selection.innerHTML += "You selected 1 out of 5";
            break;
        case 2:
            selection.innerHTML += "You selected 2 out of 5";
            break;
        case 3:
            selection.innerHTML += "You selected 3 out of 5";
            break;
        case 4:
            selection.innerHTML += "You selected 4 out of 5";
            break;
        case 5:
            selection.innerHTML += "You selected 5 out of 5";
            break;
    }
    main.style.display = "none";
    thanks.style.display = "block";
});