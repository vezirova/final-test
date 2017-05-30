/*globals document, window, $ */
(function () {
    "use strict";

    var kids = [];

    var TEMPLATE = "" +
        "<div id=\"kids\"> +\n" +
        "    <div class=\"kid\"> + \n" +
        "         <div class=\"panel panel-info\">\n" +
        "               <div class=\"panel-heading\">\n" +
        "                   <h3>\"%KID-NAME%\"</h3>\n" +
        "               </div>\n" +
        "               <div class=\"panel-body\">\n" +
        "                   <div class=\"col-sm-4\">\n" +
        "                       <img class=\"img-responsive\" src=\"%IMAGE%\">\n" +
        "                   </div>\n" +
        "                   <div class=\"col-sm-8\">\n" +
        "                       <ul>\n" +
        "                           <li><h5>\"%AGE%\"</h5></li>\n" +
        "                           <li><h5>\"%COLOR%\"</h5></li>\n" +
        "                           <li><h5>\"%GAME%\"</h5></li>\n" +
        "                           <li><h5>Л\"%FOOD%\"</h5></li>\n" +
        "                       </ul>\n" +
        "                   </div>\n" +
        "               </div>\n" +
        "         </div>\n" +
        "    </div>\n" +
        "</div>\n"

    
    initialize();


    function loadDb() {
        $.getJSON("js/kids.json", function (data) {
            kids = data;
            displayKids(sort(kids, "name"));
        });
    }

    function displayKids(list) {
        var collection = document.querySelector("#collection");
        collection.innerHTML = "";

        list.forEach(function (kid) {
            var html = TEMPLATE
            .replace("%KID-NAME%", kid.name)
            .replace("%IMAGE%", kid.image)
            .replace("%AGE%", kid.age)
            .replace("%COLOR%", kid.color)
            .replace("%GAME%", kid.game)
            .replace("%FOOD%", kid.food);
            var div = document.createElement("div");
            div.className = "col-md-6";
            div.innerHTML = html;
            collection.appendChild(div);
        });
    }

    function sort(list, name) {
        return list.sort(function (a,b) {
            if (a[property] > b[property]) {
                return 1;
            }
            if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        });
    }


            displayKids(list);
        });
    }
})();
