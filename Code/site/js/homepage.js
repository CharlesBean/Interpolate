(function(){
    var hiddenContent = document.getElementById('latest-post-content'),
        latestPostTitle = document.getElementById('latest-post');
        
    latestPostTitle.addEventListener('click', expandContent, false);
    
    function expandContent(e){
        if (hiddenContent.className = 'latest-post content hidden'){
            hiddenContent.className = 'latest-post content visible';
        }
    }
    
})