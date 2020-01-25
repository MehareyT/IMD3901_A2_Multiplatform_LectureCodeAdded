AFRAME.registerComponent( 'create-album',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const AlbumObject = document.querySelector('.music');
            
            if(document.querySelector('.music')==null){
            Context_AF.createAlbum();
            console.log('click');
        
           
            }

            else if(AlbumObject.getAttribute('id') === "brown_bird"){
                
                AlbumObject.setAttribute('material','src:assets/textures/judas_priest_album.jpg');
                AlbumObject.setAttribute('id', "judas_priest");
        

                console.log('check_brown_bird');

            }
            
            else if(AlbumObject.getAttribute('id') === "judas_priest"){
                AlbumObject.setAttribute('material','src:assets/textures/mt_joy_album.jpg');
                AlbumObject.setAttribute('id', "mt_joy")

                console.log('check_judas_priest');
            }
            else if(AlbumObject.getAttribute('id') === "mt_joy"){
                AlbumObject.setAttribute('material','src:assets/textures/brown_bird_album.jpg');
                AlbumObject.setAttribute('id', "brown_bird")

                console.log('check_mt_joy');
            }

          
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
    createAlbum: function() {
        const Context_AF = this;

        let Album1Elem = document.createElement('a-entity');
        Album1Elem.setAttribute('id', "brown_bird");
        Album1Elem.setAttribute('class','clickable music');
        Album1Elem.setAttribute('geometry', 'primitive:box; width: 2.0; depth: 0.5; height: 2.0');
        Album1Elem.setAttribute('material', 'src:assets/textures/brown_bird_album.jpg');
        Album1Elem.setAttribute('delete-Album', '');
        Album1Elem.setAttribute('position', {x:0, y:4, z:0});

        let scene = document.querySelector('a-scene');
        scene.appendChild(Album1Elem);
    }
});