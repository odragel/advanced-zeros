module.exports = function getZerosCount(number, base) {
  var baseObject = {};
  var min = number;

   var simpleNumber = 2;
    while (base > 1) {
         while(!isSimpleNumber(simpleNumber)){
             simpleNumber++;
         }

         if(base % simpleNumber == 0){
             var tempAmountInBase = 0;
             do {
                 tempAmountInBase++;
                 base /= simpleNumber;
             } while(base % simpleNumber == 0)

            baseObject[simpleNumber] = tempAmountInBase;

         }
         simpleNumber++;
     }


     for(key in baseObject){
         var tempKey = Number(key);
         var numberKey = Math.floor(number/tempKey)*tempKey;

          //divided first time
         var rest = numberKey/ tempKey; //first rest
         var amountKey=rest;

         do {
             var tempNumber = rest;
             while (tempNumber % tempKey == 0) {
                 amountKey++
                 tempNumber /= tempKey;
             }
              rest--;
         }while(rest >= tempKey)

         var tempValue = Math.floor(amountKey/baseObject[key]);
         if(min > tempValue){
             min = tempValue;
         }

    }


     function isSimpleNumber(number){
       if(number > 2){
             var divider = number - 1;

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


    // return resultArray[0];
    return min;


}