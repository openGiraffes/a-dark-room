window.onload = function () {
    $('#menu').hide();
    document.activeElement.addEventListener("keydown", handleKeydown);
};
let menuidx = -1;
let showMenu = false;
function handleKeydown(e) {
    if (e.key != "EndCall") {
        e.preventDefault();
    }
    switch (e.key) {
        case "ArrowUp":
            nav(-1);
            break;
        case "ArrowDown":
            nav(1);
            break;
        case "ArrowRight":
            tab(1);
            break;
        case "ArrowLeft":
            tab(-1);
            break;
        case "Q":
        case "SoftLeft":
            enter();
            break;
        case "E":
        case "SoftRight":
            if (showMenu) {
                showMenu = false;
                $('#menu').hide();
                $('#softkey-right').text('菜单');
            }
            else {
                showMenu = true;
                $('#menu').show();
                $('#softkey-right').text('返回');
            }
            break;
    }
}
function nav(move) {
    if (showMenu) {
        var next = menuidx + move;
        var total = $('#menucontainer li').length;
        
    }
}
function tab(move) {
    if (showMenu) {

    }
}