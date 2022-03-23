const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(result, kataId){
    var placeholder = document.getElementById(`placeholder${kataId}`);
    console.log(`placeholder${kataId}`);
    placeholder.innerHTML = result;
}


function kata1() {
    kataId = 1;
    result = [];

    for(let i = 0; i < 25; i++){
        result[i] = i+1;
    }
    showResults(result, kataId);

    return;
}



function kata2() {
    kataId = 2;
    result = [];

    for(let i = 25; i > 0; i--){
        result.push(i);
    }
    showResults(result, kataId);
    
    return;
}

function kata3() {
    kataId = 3;
    result = [];

    for(let i = 0; i > -25; i--){
        result[-i] = i-1;
    }
    showResults(result, kataId);
    
    return;
}

function kata4() {
    kataId = 4;
    result = [];

    for(let i = -25; i < 0; i++){
        result.push(i);
    }
    showResults(result, kataId);
    
    return;
}

function kata5() {
    kataId = 5;
    result = [];

    for(let i = 25; i > -26; i--){
        if(i % 2 != 0){
            result.push(i);
        } 
    }
    showResults(result, kataId);
    
    return;
}

function kata6() {
    kataId = 6;
    result = [];

    for(let i = 3; i < 100; i = i+3){
        result.push(i);    
    }
    showResults(result, kataId);
    
    return;
}

function kata7() {
    kataId = 7;
    result = [];

    for(let i = 7; i < 100; i = i+7){
        result.push(i);    
    }
    showResults(result, kataId);
    
    return;
}

function kata8() {
    kataId = 8;
    result = [];

    for(let i = 100; i > 0; i--){
        if(i % 3 == 0 || i % 7 == 0){
            result.push(i);
        }
    }
    showResults(result, kataId);
    
    return;
}

function kata9() {
    kataId = 9;
    result = [];

    for(let i = 5; i < 100; i++){
        if(i % 5 == 0 && i % 2 != 0){
            result.push(i);
        }
    }
    showResults(result, kataId);
    
    return;
}

function kata10() {
    kataId = 10;
    result = sampleArray;

    showResults(result, kataId);
    
    return;
}

function kata11() {
    kataId = 11;
    result = [];

    for(let i = 0; i < sampleArray.length; i++){
        if( sampleArray[i] % 2 == 0){
            result.push(sampleArray[i]);
        }
    }
    showResults(result, kataId);
    
    return;
}

function kata12() {
    kataId = 12;
    result = [];

    for(let i = 0; i < sampleArray.length; i++){
        if( sampleArray[i] % 2 != 0){
            result.push(sampleArray[i]);
        }
    }
    showResults(result, kataId);
    
    return;
}

function kata13() {
    kataId = 13;
    result = [];

    for(let i = 0; i < sampleArray.length; i++){
        if( sampleArray[i] % 8 == 0){
            result.push(sampleArray[i]);
        }
    }
    showResults(result, kataId);
    
    return;
}

function kata14() {
    kataId = 14;
    result = [];

    for(let i = 0; i < sampleArray.length; i++){
        result.push(sampleArray[i]*sampleArray[i]);
        
    }
    showResults(result, kataId);
    
    return;
}

function kata15() {
    kataId = 15;
    result = 0;

    for(let i = 0; i <= sampleArray.length; i++){
        result += i;
    }
    showResults(result, kataId);
    
    return;
}

function kata16() {
    kataId = 16;
    result = 0;

    for(let i = 0; i < sampleArray.length; i++){
        result += sampleArray[i];
    }
    showResults(result, kataId);
    
    return;
}

function kata17() {
    kataId = 17;
    result = 1000;

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]<result){
            result = sampleArray[i];
        }
    }
    showResults(result, kataId);
    
    return;
}

function kata18() {
    kataId = 18;
    result = 0;

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]>result){
            result = sampleArray[i];
        }
    }
    showResults(result, kataId);
    
    return result;
}

/* work in progress

function kataBonus1() {
    kataId = 19;
    result = 0;

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]>result){
            result = sampleArray[i];
        }
    }
    showResults(result, kataId);
    
    return result;
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
*/