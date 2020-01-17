AFRAME.registerComponent( 'delete-cow-component', {
    init : function() {
        const Context_AF = this;

        
        //entity and element are interchangable
        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
            Context_AF.deleteCow();

        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);

        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);

        });
    },
    deleteCow : function() {
        const Context_AF = this;

        Context_AF.el.parentNode.removeChild(Context_AF.el );
        

      
    }
});