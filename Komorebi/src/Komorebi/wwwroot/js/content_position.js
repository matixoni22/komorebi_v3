document.addEventListener("DOMContentLoaded", function () {

    function renderGrid() {
        var blocks = document.getElementsByClassName("col-xs-12 col-sm-6 col-md-4 col-lg-3");
        var new_left, new_top, col;

        //clearing position of blocks
        for (var x = 0; x < blocks.length; x++) {
            blocks[x].style.left = 0 + "px";
            blocks[x].style.top = 0 + "px";
        };
        
        if (window.outerWidth <= 767) {
            col = 1;
        }else if(window.outerWidth >= 768 && window.outerWidth <= 991){
            col = 2;
        }
        else if (window.outerWidth >= 992 && window.outerWidth <= 1199) {
            col = 3;
        }
        else if (window.outerWidth >= 1200) {
            col = 4;
        }

        for (var i = 1; i < blocks.length; i++) {
            if (i % col == 0) {
                new_top = blocks[i - col].offsetTop + blocks[i - col].offsetHeight;
                blocks[i].style.top = new_top + "px";
            } else {
                if (blocks[i - col]) {
                    new_top = blocks[i - col].offsetTop + blocks[i - col].offsetHeight;
                    blocks[i].style.top = new_top + "px";
                }
                new_left = blocks[i - 1].offsetLeft + blocks[i - 1].offsetWidth;
                blocks[i].style.left = new_left + "px";
            }
        };
    };
    window.addEventListener("load", renderGrid, false);
    window.addEventListener("resize", renderGrid, false);
});
