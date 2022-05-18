(document).ready(function () {
    
    "use strict";

    ("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    ('#sidebarCollapse').on('click', function () {
        ('#sidebar').toggleClass('active');
    });

});