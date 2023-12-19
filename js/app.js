import { time } from "./date.js"

document.addEventListener("DOMContentLoaded", e => {
    console.log(time.dates+'\n'+time.el.innerText)
    time.printOut()
    let xml, xmlhttp, xmlDoc, vliste;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "api/president.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    console.log(xmlDoc);
    vliste = String("");
    xml = xmlDoc.getElementsByTagName("president");

    console.log(xml[0].childNodes[1]);
    for (let i = 0; i < xml.length; i++) {

        //variables pour les noeuds

        const Nom = xml[i].getElementsByTagName("Nom")[0].childNodes[0].nodeValue;
        const Mandat = xml[i].getElementsByTagName("Mandat")[0].childNodes[0].nodeValue;
        const Naissance = xml[i].getElementsByTagName("Naissance")[0].childNodes[0].nodeValue;
        const status = xml[i].getElementsByTagName("Statut")[0].childNodes[0].nodeValue;
        const Image = xml[i].getElementsByTagName("Image")[0].getAttribute("path");

        //ajout de chaque propriété dans boucle
        console.log(Nom + " " + Mandat + " " + Naissance + " " + status);

        /* template président */
        vliste += `<li>
                    <figure> 
                    <img src="${Image}" alt="${Nom}">
                        <figcpation>
                        <ul>
                            <li><strong>Nom</strong> : ${Nom} </li>
                            <li><strong>Mandat</strong> : ${Mandat}</li>
                            <li><strong>Naissance</strong> : ${Naissance}</li>
                            <li><strong>Status</strong> : ${status}</li>
                        </ul>
                        </figcpation> 
                    </figure>
                    </li>`
        //stockage dans un tableau
        let myStock = [];
        myStock.push(Nom, Mandat, Naissance, status, Image);
        console.log(JSON.stringify(myStock));
        localStorage.setItem("stock", myStock);
    }

    document.querySelector("ul").innerHTML = vliste;
});