AFRAME.registerComponent( 'create-album2',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        
    
        Context_AF.el.addEventListener('click', function(event) {
            const AlbumObject2 = document.querySelector('.music');
            
            if(document.querySelector('.music')==null){
            Context_AF.createAlbum();
            console.log('click');
        
           
            }

            else if(AlbumObject2.getAttribute('id') === "mt_joy"){
                
                AlbumObject2.setAttribute('material','src:assets/textures/judas_priest_album.jpg');
                AlbumObject2.setAttribute('id', "judas_priest");
        

                console.log('check_brown_bird');

            }
            
            else if(AlbumObject2.getAttribute('id') === "judas_priest"){
                AlbumObject2.setAttribute('material','src:assets/textures/brown_bird_album.jpg');
                AlbumObject2.setAttribute('id', "brown_bird")

                console.log('check_judas_priest');
            }
            else if(AlbumObject2.getAttribute('id') === "brown_bird"){
                AlbumObject2.setAttribute('material','src:assets/textures/mt_joy_album.jpg');
                AlbumObject2.setAttribute('id', "mt_joy")

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

        let AlbumElem = document.createElement('a-entity');
        AlbumElem.setAttribute('id', "mt_joy");
        AlbumElem.setAttribute('class','clickable music');
        AlbumElem.setAttribute('geometry', 'primitive:box; width: 2.0; depth: 0.5; height: 2.0');
        AlbumElem.setAttribute('material', 'src:assets/textures/mt_joy_album.jpg');
        AlbumElem.setAttribute('delete-Album', '');
        AlbumElem.setAttribute('position', {x:0, y:4, z:0});

        let scene = document.querySelector('a-scene');
        scene.appendChild(AlbumElem);
    }
});