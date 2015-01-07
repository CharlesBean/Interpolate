// querySelector, jQuery style
var $ = function (selector) {
    return document.querySelector(selector);
};


(function(){
    
    var button = document.getElementById("cn-button"),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay'),
        navOptions = $('#nav-options').getElementsByTagName('li');
    
    var open = false; // Open flag
    
    
    
    button.addEventListener('click', navHandler, false);
    wrapper.addEventListener('click', cnHandler, false);

    
    /*** Handling coloring ***/
    
    function hoverHandler(e){
        if (open){
            button.style.backgroundColor = '#957186';
        }  
    }
    
    function leaveHandler(e){
        if (open){
            button.style.backgroundColor = '#3e6990';
        }
    }

    // For each <li> inside #links (the <ul>)
    for (var i = 0; i < navOptions.length; i++) {
        var link = navOptions[i];
        link.onmouseover = hoverHandler;
        link.onmouseleave = leaveHandler;
    }
    

    
    /*** Handling opening/closing ***/    
    
    function cnHandler(e){
        e.stopPropagation();   
    }
    
    function navHandler(e){
        if (!e) var e = window.event;
        e.stopPropagation(); // No click event trigger on document
        
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
        wrapper.classList.add('opened-nav');
    }
    
    function closeNav(){
        open = false;
        button.innerHTML = "Menu";
        wrapper.classList.remove('opened-nav');
    }
    
})();