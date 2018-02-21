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

     var numberObject= new Object();
     for(key in baseObject){
         var tempKey = +key;
         var numberKey = Math.floor(number/tempKey)*tempKey;
         var amountKey = 0;

          //divided first time
         var rest = numberKey/ tempKey; //first rest
         do{
             amountKey++;

             var tempNumber = rest;
             while (tempNumber % tempKey == 0) {
                 amountKey++
                 tempNumber = tempNumber / tempKey;
             }

              rest--;
         }while(rest >=1 )

       numberObject[key]= amountKey;

     }


     var resultArray=[];
     for(key in baseObject){
         resultArray.push(Math.floor(numberObject[key]/baseObject[key]));
     }

     resultArray.sort(function(a,b){return a - b;});


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


     return resultArray[0];


}