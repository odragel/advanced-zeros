module.exports = function getZerosCount(number, base) {
    var baseObject = new Object();

    var simpleNumber = 2;
    while (base > 1) {
        while(!isSimpleNumber(simpleNumber)){
            simpleNumber++;
        }

        if(base % simpleNumber == 0){
            var tempAmountInBase = 0;
            do {
                tempAmountInBase++;
                base = base / simpleNumber;
            } while(base % simpleNumber == 0)

            baseObject[simpleNumber] = tempAmountInBase;
        }
        simpleNumber++;
    }

    var resultArray=[];

    for(key in baseObject){
        var numberKey = number;
        var amountKey = 0;
        var tempKey=+key;

        while(numberKey >= tempKey){
            if(numberKey % tempKey == 0){
                var tempNumber = numberKey;

                do{
                    amountKey++;
                    tempNumber = tempNumber / tempKey;

                } while(tempNumber % tempKey == 0)

                numberKey= numberKey-tempKey;

            }else{
                numberKey--;
            }
        }
         resultArray.push(Math.floor(amountKey/baseObject[key]));

    }

    resultArray.sort(function(a,b){return a - b;})


    function isSimpleNumber(number){
        if(number > 2){
            divider = number - 1;

            while(divider >= 2 ){
                if (number % divider == 0){
                    return false;
                }
                divider--;
            }
            return true;
        } else if (number == 2){
            return true;
        } else{
            return false;
        }

    }



    return resultArray[0];
}