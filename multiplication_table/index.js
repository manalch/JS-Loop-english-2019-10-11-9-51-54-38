for (var i = 1 ; i < 10 ; i++){
    for (var x = 1 ; x < 10 ; x++){
        if (x <= i){
            document.write(i + "*" + x + "=" + (i*x) + "&nbsp");
        }
    }
    document.write("<br>");
}