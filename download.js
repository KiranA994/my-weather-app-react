$(function () {

 $('#download').click(function () {
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.fromHTML(
            $('#clear').html(), 15, 15, 
            { 'width': 170},
            function(){ doc.save('sample-file.pdf'); }
        );

    });  
});