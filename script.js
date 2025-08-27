function idgetElement(id) {
    return element = document.getElementById(id);

}

// Heart count 

idgetElement("product-container").addEventListener("click",function(event){
    // alert("clicked");
    if(event.target.className.includes("fa-heart")){
        // alert("heart clicked");
        const heartBtn = event.target;
        const total= idgetElement("available-heart");
        const currentTotal = Number(total.innerText)+ 1;
        idgetElement("available-heart").innerText = currentTotal;
    }

})

// Copy Number count 

let copyCount = 0;

idgetElement("product-container").addEventListener("click", function(event) {
    if (event.target.className.includes("copy-btn")) {

        let card = event.target.closest(".all-card");
        if (!card) return;

        let serviceNumberElem = card.querySelector(".servic-n");
        let textToCopy = serviceNumberElem ? serviceNumberElem.innerText : "";

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(function() {

                alert(`Copied: ${textToCopy}`);
                copyCount++;
                let copyCountElem = document.getElementById("copy-count");
                if (copyCountElem) {
                    copyCountElem.innerText = copyCount;
                }
            });
        }
    }
});



idgetElement("product-container").addEventListener("click", function(event){
    if(event.target.className.includes("call-btn")){
        // alert("call btn clicked");
        const callBtn = event.target;
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;

        const coinElem = idgetElement("available-coin");
        let coins = Number(coinElem.innerText);

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        alert(`Calling ${serviceName}  ${serviceNumber}...`);

        coins = coins - 20;
        coinElem.innerText = coins;

        const historyElem = idgetElement("call-history");
        const entry = document.createElement("div");
        entry.innerHTML = `<div class="rounded-xl flex justify-between p-4 shadow mt-3">
            <div>
              <h1 class="font-bold">${serviceName}</h1>
              <span class="text-[#5C5C5C]">${serviceNumber}</span>
            </div>
          </div>`;
        historyElem.appendChild(entry);
    }
})


const clearBtn = idgetElement("clear-history-btn");

    clearBtn.addEventListener("click", function() {
        const historyElem = idgetElement("call-history");
        while (historyElem.children.length > 1) {
            historyElem.removeChild(historyElem.lastChild);
        }
    });

