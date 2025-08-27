function idgetElement(id) {
    return element = document.getElementById(id);

}


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



idgetElement("product-container").addEventListener("click", function(event){
    if(event.target.className.includes("call-btn")){
        // alert("call btn clicked");
        const callBtn = event.target;
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
        // console.log(serviceName);
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;

        // Get current coins
        const coinElem = idgetElement("available-coin");
        let coins = Number(coinElem.innerText);

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        // Show alert with service info
        alert(`Calling ${serviceName}  ${serviceNumber}...`);

        // Deduct 20 coins
        coins -= 20;
        coinElem.innerText = coins;

        // Add to Call History
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

idgetElement("product-container").addEventListener("click", function(event){
    if(event.target.className.includes("copy-btn")){
        // alert("copy btn clicked");
        const copyBtn = event.target;
    }
})


const clearBtn = idgetElement("clear-history-btn");

    clearBtn.addEventListener("click", function() {
        const historyElem = idgetElement("call-history");
        while (historyElem.children.length > 1) {
            historyElem.removeChild(historyElem.lastChild);
        }
    });

