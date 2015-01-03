(function(){
    
    var button = document.getElementById("cn-button"),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay');
    
    var open = false; // Open flag
    
    button.addEventListener('click', navHandler, false);
    //button.addEventListener('focus', navHandler, false); // not needed? & causes double event click catching
    wrapper.addEventListener('click', cnHandler, false);
    
    function cnHandler(e){
        e.stopPropagation();   
    }
    
    function navHandler(e){
        if (!e) var e = window.event;
        e.stopPropagation(); // No click event trigger on document (preventDefault??)
        
        if (!open){
            openNav();
        }
        else{
            closeNav();
        }
    }
    
    function openNav(){
        open = true;
        button.innerHTML = "Close";
        overlay.classList.add('on-overlay');
        wrapper.classList.add('opened-nav');
    }
    
    function closeNav(){
        open = false;
        button.innerHTML = "Menu";
        overlay.classList.remove('on-overlay');
        wrapper.classList.remove('opened-nav');
    }
    
    document.addEventListener('click', closeNav);
    
})();