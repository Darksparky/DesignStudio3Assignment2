AFRAME.registerComponent('center-button-effect', {



    init: function () {
    
    const CONTEXT_AF = this;
    let sceneEl = document.querySelector('a-scene');
    CONTEXT_AF.isActive = false;
   
    CONTEXT_AF.el.addEventListener('click', function(){
        if(CONTEXT_AF.isActive === true){
            CONTEXT_AF.isActive = false;
            if(document.querySelector('#magicbox')){
                document.querySelector('#magicbox').parentElement.removeChild(CONTEXT_AF.magicbox);
                console.log('remove magic box');
                var managerComponent = document.querySelector('[manager]').components.manager;
                managerComponent.data.focus = '';
                managerComponent.data.isHolding = false;
                document.querySelector('#left-rotate-button').style.display = 'none';
                document.querySelector('#right-rotate-button').style.display = 'none';
            }
            
            
        }else{
            CONTEXT_AF.isActive = true;

            console.log('append magic box');
            CONTEXT_AF.magicbox = document.createElement('a-entity');
            CONTEXT_AF.magicbox.setAttribute('id', 'magicbox');
            CONTEXT_AF.magicbox.setAttribute('geometry', 
                'primitive:box; width:1; height:1; depth:1;');
            CONTEXT_AF.magicbox.setAttribute('material',{
                color: 'rgb(0, 0, 255)'
            })
            CONTEXT_AF.magicbox.setAttribute('position',{
                x: 0,
                y: 1,
                z: -3
            })
            CONTEXT_AF.magicbox.setAttribute('interactable');
            CONTEXT_AF.magicbox.setAttribute('class', 'interactive selectable');
            CONTEXT_AF.magicbox.setAttribute('animation', 'startEvents:click;');
            CONTEXT_AF.magicbox.addEventListener('click', function(){
                let cameraEl = document.querySelector('#playercam');
                var managerComponent = document.querySelector('[manager]').components.manager;
                managerComponent.interact(CONTEXT_AF.magicbox);
            })  
            
            console.log(CONTEXT_AF.magicbox);
           
            sceneEl.appendChild(CONTEXT_AF.magicbox);
        }

    })
    // on click 
}

})