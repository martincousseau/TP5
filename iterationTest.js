function absTest () {
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = abs(numbers);
    console.log(absNumbers); 	// => [42, 3, 0, 1, 100]
    console.log(numbers);    	// => [-42, 3, 0, -1, 100]

}


function evenNumberTest(){

    console.log( evenOnly([0,1,2,3,4]) );  // => [0, 2, 4] 

}


function sumTest(){

    console.log( sum([]) ); // => 0
    console.log( sum([ 42 , 404 , 1337 ]) ); // => 1783

}

function flattenTest () {

    console .log( flatten2D([[ 1 , 2 ], [ 3 , 4 ], [ 5 , 6 ]])); // [1, 2, 3, 4, 5, 6]
    console .log( flatten2D([[ 1 , 2 ], [ 3 , 4 , 5 ], [ 6 ]])); // [1, 2, 3, 4, 5, 6]

}