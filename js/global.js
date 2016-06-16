    var bg="#FFFFE1"
    var fs=2
    M = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    D = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");


    function getCal() {
        var startDate = document.getElementById('txtDays').value;
            console.log(startDate);
        var day = Number(startDate.substring(0, 2));
            console.log(day);
        var month = Number(startDate.substring(3, 5)) - 1;
            console.log(month);
        var year = Number(startDate.substring(6, 10));
            console.log(year);``
        var numDays = document.getElementById('txtNumDays').value;
        var countryCode = document.getElementById('txtCountry').value;
        
        var bgd = new Date(M[month]+day+year);
        document.write('<TABLE BORDER=0><TR><TD VALIGN=TOP>');
        Calendar(day,month,year);
        document.write('</TD><TD VALIGN=TOP>');
    }







    function Calendar(dy,mo,yr){
        d = "312831303130313130313031";
        if (yr / 4 == Math.floor(yr / 4)) {
        d = d.substring(0, 2) + "29" + d.substring(4, d.length);
        }
        pos = (mo * 2);
        ld = eval(d.substring(pos, pos + 2));
        document.write("<TABLE BORDER=1"
        + " BGCOLOR='" + bg
        + "'><TR><TD ALIGN=CENTER COLSPAN=7>"
        + "<FONT SIZE=" + fs + ">" + M[mo] + " " + yr
        + "</FONT></TD></TR><TR><TR>");
        for (var i = 0;i < 7;i ++) {
        document.write("<TD ALIGN=CENTER>"
        +"<FONT SIZE="+fs+">" + D[i] + "</FONT></TD>");
        }
        document.write("</TR><TR>");
        ctr = 0;
        for (var i = 0;i < 7; i++){
        if (i < dy) {
        document.write("<TD ALIGN=CENTER>"
        +"<FONT SIZE=" + fs + "> </FONT>"
        +"</TD>");
        }
        else {
        ctr++;
        document.write("<TD ALIGN=CENTER>"
        + "<FONT SIZE=" + fs + ">" + ctr + "</FONT>"
        + "</TD>");
           }
        }
        document.write("</TR><TR>");
        while (ctr < ld) {
        for (var i = 0;i < 7; i++){
        ctr++;
        if (ctr > ld){
        document.write("<TD ALIGN=CENTER>"
        + " </TD>");
        }
        else {
        document.write("<TD ALIGN=CENTER>"
        + "<FONT SIZE=" + fs + ">" + ctr + "</FONT>"
        + "</TD>");
           }
        }
        document.write("</TR><TR>");
        }
        document.write("</TR></TABLE>");
    }