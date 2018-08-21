

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var fileUrl = 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf';
  var fileName = 'pdf-sample.pdf';
	var fileTransfer = new FileTransfer();
	var uri = encodeURI(fileUrl);
  var fileUrl = cordova.file.documentsDirectory;
  //var fileUrl = cordova.file.externalRootDirectory;
  var option = {};
  function success()
  {
      alert('PDF opened');
  }
  
  function error()
  {
      alert('PDF error');
  }
 // alert(fileUrl)
		fileTransfer.download(
			uri,
			fileUrl + "/" + fileName,
			function (entry) {
			entry.file(function (file) {
				    //alert(entry.toURL());
            //alert(file.type);
            PDFReader.open(entry.toURL(), options, success, error);
                //openFile(entry.toURL(), file.type);
				
			},
				function (fail) {
				alert('failed')
		});
    },
			function (error) {
      alert('error')
		},
			true
      );
}

function show_more_menu() {
    
	
  
	

}