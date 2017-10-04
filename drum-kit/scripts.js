const keys = Array.from( document.querySelectorAll( '.key' ) );

window.addEventListener( 'keydown', playSound );

keys.forEach( ( key ) => {

    key.addEventListener( 'transitionend', removeTransition );
});

function playSound( event ) {

    const audio = document.querySelector( `audio[data-key="${event.keyCode}"]` );
    const key   = document.querySelector( `div[data-key="${event.keyCode}"]`   );

    if( ! audio ) return;

    key.classList.add( 'playing' );
    audio.currentTime = 0;

    audio.play();
}

function removeTransition( event ) {

    if( event.propertyName !== 'transform' ) return;

    event.target.classList.remove( 'playing' );
}
