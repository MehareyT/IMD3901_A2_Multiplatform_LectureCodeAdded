AFRAME.registerComponent( 'play-album',{
    
    init : function()
    
    {
       
        console.log('init component');
        

        const Context_AF = this;
        const audio1 = new Audio('assets/sounds/brownBirdAudio.mp3');
        const audio2 = new Audio('assets/sounds/judasPriestAudio.mp3')
        const audio3 = new Audio('assets/sounds/mtJoyAudio.mp3')

        Context_AF.el.addEventListener('click', function(event) {
            const albumsong = document.querySelector(".music");
            console.log('play');

            if(albumsong.getAttribute('id')=== 'brown_bird'){
                console.log('bird');

                audio2.pause();
                audio3.pause();
                audio1.play();

            }

            else if(albumsong.getAttribute('id')=== 'judas_priest'){
                console.log('judas');
                
                audio1.pause();
                audio3.pause();
                audio2.play();
            }

            else if(albumsong.getAttribute('id')=== 'mt_joy'){
                console.log('mtjoy');
 
                audio1.pause();
                audio2.pause();
                audio3.play();
            }
            
            
            Context_AF.playAlbum();
    });

    Context_AF.el.addEventListener('mouseenter', function(event) {
        Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
    });

    Context_AF.el.addEventListener('mouseleave', function(event) {
        Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
    });

},
    playAlbum: function(){
    const Context_AF = this;

        


    let scene = document.querySelector('a-scene');
    scene.appendChild(play-album);
}
    
});
