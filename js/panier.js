$(document).ready(function () {

    let j = parseInt(sessionStorage.getItem("compteur"));
    let i = 1;
    while (i <= j) {

        var vaisseau = JSON.parse(sessionStorage.getItem("vaisseau" + i));
        i += 1;

        let prod = document.createElement("div");
        prod.setAttribute('class', 'produit');
        let type = document.createElement("h3");
        type.innerText = vaisseau.type;
        prod.appendChild(type);
        let list = document.createElement("ul");
        let couleur = document.createElement("li");
        couleur.innerText = "Couleur : " + vaisseau.couleur;
        let aile = document.createElement("li");
        aile.innerText = "Ailes : " + vaisseau.aile;
        let reacteur = document.createElement("li");
        reacteur.innerText = "Réacteur : " + vaisseau.reacteur;
        list.appendChild(couleur);
        list.appendChild(aile);
        list.appendChild(reacteur);
        prod.appendChild(list);
        let hr = document.createElement("hr");
        document.querySelector(".liste-prod").appendChild(prod);
        document.querySelector(".liste-prod").appendChild(hr);

    }

});