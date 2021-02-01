const friendArray = ["Josh", "Garrett", "Jake", "Kayla", "Haley"];
const singButton = document.getElementById("sing-btn");

singButton.addEventListener("click", function () {
    for (let i = 0; i < friendArray.length; i++) {
        const div = document.createElement("div");
        div.className = "friend";

        const h3 = document.createElement("h3");
        h3.textContent = friendArray[i];

        div.appendChild(h3);
        document.body.appendChild(div);

        for (let j = 99; j >= 1; j--) {
            const p = document.createElement("p");

            if (j === 2) {
                p.textContent = "2 lines of code in the file, 2 lines of code; " + friendArray[i] + " strikes one out, clears it all out, 1 line of code in the file";
            } else if (j === 1) {
                p.textContent = "1 line of code in the file, 1 line of code; " + friendArray[i] + " strikes one out, clears it all out, no more lines of code in the file";
            } else {
                p.textContent = j + " lines of code in the file, " + j + " lines of code; " + friendArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file";
            }

            div.appendChild(p);
        }
    }
});
