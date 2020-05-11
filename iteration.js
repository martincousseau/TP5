function abs(numbers){

    let absNumber = numbers.map(

        function(number){
            return Math.sqrt(number**2);

        }
    ); {
        
    };

   return absNumber
}



function evenOnly(numbers){

    let evenNumber = numbers.filter(function(number){return number % 2 == 0})

    return evenNumber;

}


//exercice 3

function sum(numbers) {

    if(numbers.length == 0){

        return 0;

    } else {

        let sumNumber = numbers.reduce((tot,n) => tot+n);

        return sumNumber;

    }

}

//exercice 4

function flatten2D(numbers){

    let flat = numbers.reduce( function(flat, number){

        flat.concat(number);
    }

    
    )

    return flat;

}