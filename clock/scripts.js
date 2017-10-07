const secondHand = document.querySelector( '.second-hand' );
const minsHand   = document.querySelector( '.min-hand'    );
const hourHand   = document.querySelector( '.hour-hand'   );

setInterval( setDate, 1000 );

function setDate() {
    
    const now            = new Date();
    const seconds        = now.getSeconds();
    const mins           = now.getMinutes();
    const hour           = now.getHours();
    const secondsDegrees = ( ( seconds / 60 ) * 360 ) + 90;
    const minsDegrees    = ( ( mins / 60    ) * 360 ) + 90;
    const hourDegrees    = ( ( hour / 12    ) * 360 ) + 90;

    secondHand.style.transform = `rotate( ${secondsDegrees}deg )`;
    minsHand.style.transform   = `rotate( ${minsDegrees}deg    )`;
    hourHand.style.transform   = `rotate( ${hourDegrees}deg    )`;
}