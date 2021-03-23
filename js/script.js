// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// stampiamo i numeri da 1 a 100

for( var i = 1; i <= 100; i++) {
    var numeri = i ;

    // per i multipli di 3 e 5 stampiamo "fizzbuzz"
    // per i multipli di 5 stampiamo "buzz"
    // per i multipli di 3 stampiamo "fizz"

    if ( numeri % 3 === 0 && numeri % 5 === 0) {
        console.log( numeri + ': fizzbuzz');
    } else if( numeri % 5 === 0) {
        console.log( numeri + ': buzz')
    } else if( numeri % 3 === 0) {
        console.log(numeri + ': fizz')
    } else {
        console.log(numeri);
    }

}




