function NameLabel() {
    let name = document.getElementById("navn").value;
    let NamesLabel = `Du heter ${name}`;
    if (name.toLowerCase() == "hei") {
        NamesLabel = `Du heter ikke ${name}`;
    }

    let nameArray = NamesLabel.split("");
    let totalName = "";
    let i = 0;

    function updateLabel() {
        if (i < nameArray.length) {
            totalName += nameArray[i];
            document.getElementById("navnLabel").innerHTML = totalName;
            i++;
            setTimeout(updateLabel, 100);
        }
    }
    updateLabel();
}
