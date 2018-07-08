(function ($) {
  
})(jQuery);

function changePage(item) {
    console.log("Switch to page [" + item + "]");
    $("#main").addClass("hider");
    setTimeout(() => {
        $("#main").remove();
        switch (item) {
            case "Biografia":
                loadBiografia();
                break;

            default:
                break;
        }
    }, 400);
}

function loadBiografia() {
    console.log("LOADING BIOGAFIA");

    var $body = $('body');
    $body.addClass("is-preload");

    var section = document.createElement('section');
    section.setAttribute("id", "main");

    var dim;
    $.getJSON("../../images/photo/alice/config.json", function (data) {
        dim = data.dimension;
        console.log(dim);

        var items = document.createElement('div');
        items.setAttribute("class", "items");

        for (var i = 1; i <= dim; i++) {

            var src = "images/photo/alice/" + i + ".jpg"

            var article = document.createElement("article");
            article.setAttribute("class", "item thumb span-1");

            var h2 = document.createElement("h2");
            h2.appendChild(document.createTextNode("Biogafia"));
            article.appendChild(h2);

            var anchor = document.createElement("a");
            anchor.setAttribute("class", "image");
            anchor.setAttribute("href", src);

            var img = document.createElement("img");
            img.setAttribute("src", src);

            anchor.appendChild(img);
            article.appendChild(anchor);
            items.appendChild(article);
        };
        section.appendChild(items)
        var wrapper = document.getElementById("wrapper");
        wrapper.prepend(section);
        funcUtil();
        funcMain();

        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);

        // $.fn.panel();
        // $('#main').poptrox();

    });

}



    // var overlayDiv = document.createElement('div');

    // overlayDiv.setAttribute('style', 'background-color: rgba(255, 79, 0, 0.25098);position:absolute;' +
    //     'left:' + x + 'px;top:' + y + 'px;width:' + width + 'px;height:' + height + 'px; z-index: 1029; cursor: not-allowed');
    // //overlayDiv.setAttribute("data-ng-click", "preSignField(" + oInfoString + ")");
    // overlayDiv.setAttribute("class", "labelSignature");
    // overlayDiv.setAttribute("id", "pagesignatureid-" + field.fieldName);
    // $compile(overlayDiv)($scope)

    // var overlayParag = document.createElement('h6');
    // overlayParag.setAttribute("style", "color: red;");
    // var node = document.createTextNode("Signature Field: " + field.originalFieldName);
    // overlayParag.appendChild(node);
    // overlayDiv.appendChild(overlayParag);

    // var ngpdf = document.getElementById("ngpdf");

