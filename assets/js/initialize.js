/* function to determine is browser is mobile or not */
function isMobile() {
    let mobile = false;
    /* regex from http://detectmobilebrowsers.com/ */
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) mobile = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return mobile;
}

/* function to add script elements to import javascript and append to head tag */
function loadScripts(url) {
    let script = document.createElement("script");
    script.type = "application/javascript";
    script.src = url;
    script.async = false;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function linkStyles(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

/* attrs is an object of key: value pairs
   key is the attribute name
   value is the value of the attribute
   elem is the html element object */
function setAttrs(elem, attrs) {
    for (let key in attrs) elem.setAttribute(key, attrs[key]);
}

const mobile = isMobile();

document.onreadystatechange = function () {

    if (document.readyState === "complete") {

        if (mobile) {

            document.getElementById("links").innerHTML = "/ <a id=\"bye\">leave</a><br />/ <a id=\"hello\">contact</a><br />/ <a id=\"resume\">résumé</a><br />/ <a id=\"work\">portfolio</a>";
            document.getElementById("sep").style.visibility = "hidden";
            document.getElementById("content").style.maxWidth = "300px";
            document.getElementById("content").style.textAlign = "left";
        }


        let byeAttrs = {
            "href": "https://www.google.com/",
            "data-tooltip": "see you around!"
        };

        let helloAttrs = {
            "href": "mailto:luke@belinc.me",
            "data-tooltip": "questions or inquiries?"
        };

        let workAttrs = {
            "href": "#",
            "data-tooltip": "This link will be updated upon completion of the site"
        };

        let resuAttrs = {
            "href": "./downloads/LukeBelincResume-02132019.pdf",
            "data-tooltip": "view/download my résumé"
        };


        if (window.history.length > 1) {

            /* change link features */
            document.getElementById("bye").innerHTML = "return";
            byeAttrs["href"] = "javascript:history.back()";

            /* change message to the user */
            byeAttrs["data-tooltip"] = "whence you came!";
            document.getElementById("drop-tooltip-0").innerHTML = "whence you came!";

        }

        setAttrs(document.getElementById("bye"), byeAttrs);
        setAttrs(document.getElementById("hello"), helloAttrs);
        setAttrs(document.getElementById("resume"), resuAttrs);
        setAttrs(document.getElementById("work"), workAttrs);

        document.getElementById("content").style.visibility = "visibile";
        document.getElementsByTagName("div")[1].style.display = "none";
    }
}