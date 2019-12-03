$("html").on("click",".export_pdf", function(){
    var imgData = chartInstance.toBase64Image();
    var pdf = new jsPDF('landscape');
    pdf.addImage(imgData,'JPEG',10,10,280,150);
    pdf.save("chart.pdf");
});

$("html").on("click",".export_pdf2", function(){
    var imgData = chartInstance2.toBase64Image();;
    var pdf = new jsPDF('landscape');
    pdf.addImage(imgData,'JPEG',10,10,280,150);
    pdf.save("chart.pdf");
});

function create_excel(){
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "GreenR Data",
        Subject: "Données mesures",
        Author: "GreenR",
        CreatedDate: new Date(2017,12,19)
    };

    wb.SheetNames.push("GreenR Data");

    switch (nom) {
        case 'dashboard':
            var ws_data = [['Température','Humidité','Taux CO2','Heure']]
            for(let i=0;i<data_temp.length;i++){
                ws_data.push([data_temp[i],data_hum[i],data_CO2[i],data_time[i]]);
            }
            break;

        default:
            var ws_data = [[(nom == "CO2" ? "Taux CO2" : (nom == "temp" ? "Température" : "Humidité")),'Heure']]
            for(let i=0;i<data_flux.length;i++){
                ws_data.push([data_flux[i],data_time[i]]);
            }
            break;
    }

    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["GreenR Data"] = ws;
    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
    def(wbout);
}

$("html").on("click",".export_xls", function(){
    create_excel();
});


function def(wbout){
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'GreenR_Data.xlsx');
}



function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;
}

