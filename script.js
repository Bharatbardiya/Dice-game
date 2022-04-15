function game(){
    var p1 = Math.floor(Math.random()*6 + 1);
    var p2 = Math.floor(Math.random()*6 + 1);
    // console.log(p1)
    // console.log(p2)
    var startD1 = document.getElementById("p1Dice");
    var startD2 = document.getElementById("p2Dice");
    startD1.classList.add("remove");
    startD2.classList.add("remove");
    var madeId1 = "p1d"+ p1.toString();
    var madeId2 = "p2d" + p2.toString();
    console.log(madeId1)
    console.log(madeId2)
    var displayAnsDice1 = document.getElementById(madeId1);
    displayAnsDice1.classList.remove("remove");
    var displayAnsDice2 = document.getElementById(madeId2);
    displayAnsDice2.classList.remove("remove");

    var p1img1 = document.getElementById("p1d1");
    var p1img2 = document.getElementById("p1d2");
    var p1img3 = document.getElementById("p1d3");
    var p1img4 = document.getElementById("p1d4");
    var p1img5 = document.getElementById("p1d5");
    var p1img6 = document.getElementById("p1d6");

    var p2img1 = document.getElementById("p2d1");
    var p2img2 = document.getElementById("p2d2");
    var p2img3 = document.getElementById("p2d3");
    var p2img4 = document.getElementById("p2d4");
    var p2img5 = document.getElementById("p2d5");
    var p2img6 = document.getElementById("p2d6");

    if(p1img1.className == '' && p1img1.id != madeId1){
        p1img1.classList.add('remove');
    }
    if(p1img2.className == '' && p1img2.id != madeId1){
        p1img2.classList.add('remove');
    }
    if(p1img3.className == '' && p1img3.id != madeId1){
        p1img3.classList.add('remove');
    }
    if(p1img4.className == '' && p1img4.id != madeId1){
        p1img4.classList.add('remove');
    }
    if(p1img5.className == '' && p1img5.id != madeId1){
        p1img5.classList.add('remove');
    }
    if(p1img6.className == '' && p1img6.id != madeId1){
        p1img6.classList.add('remove');
    }


    if(p2img1.className == '' && p2img1.id != madeId2){
        p2img1.classList.add('remove');
    }
    if(p2img2.className == '' && p2img2.id != madeId2){
        p2img2.classList.add('remove');
    }
    if(p2img3.className == '' && p2img3.id != madeId2){
        p2img3.classList.add('remove');
    }
    if(p2img4.className == '' && p2img4.id != madeId2){
        p2img4.classList.add('remove');
    }
    if(p2img5.className == '' && p2img5.id != madeId2){
        p2img5.classList.add('remove');
    }
    if(p2img6.className == '' && p2img6.id != madeId2){
        p2img6.classList.add('remove');
    }

    var result = document.querySelector("div.result");

    if(p1>p2){
        result.textContent = "congratulation player1 you are win.";
    }
    else if(p2>p1){
        result.textContent = "congratulation player2 you are win.";
        
    }
    else{
        result.textContent = "Ohh!! match is tie.";

    }
}