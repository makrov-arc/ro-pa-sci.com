const container = document.querySelector(".container"),
    userresult = document.querySelector(".user_result img"),
    cpuresult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionimage = document.querySelectorAll(".option_image");

optionimage.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userresult.src = cpuresult.src = "image/rockhand.jpg";
        result.textContent = "Wait...";


        optionimage.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("active");
        });

        container.classList.add("start");

        let time = setTimeout(() => {

            container.classList.remove("start");

            let imagesrc = e.target.querySelector("img").src;
            userresult.src = imagesrc;

            let randomnumber = Math.floor(Math.random() * 3);
            let cpuimages = ["image/rockhand.jpg", "image/paperhand.jpg", "image/scisssorhand.jpg"];
            cpuresult.src = cpuimages[randomnumber];

            let cpuvalue = ["R", "P", "S"][randomnumber];
            let uservalue = ["R", "P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let outcomevalue = outcomes[uservalue + cpuvalue];

            result.textContent = uservalue === cpuvalue ? "Match Draw" : `${outcomevalue} Won!!`;
        }, 2500)


    });
});