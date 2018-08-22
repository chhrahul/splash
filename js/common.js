

document.addEventListener("deviceready", onDeviceReady, false);
function success()
  {
      alert('PDF opened');
  }
  
  function error()
  {
      alert('PDF error');
  }
  
  function openFile(f)
  {
    
    alert(f)
   /* var option = {
    password: null,
    flatUI: true,
    showShadows: true,
    enableThumbs: true,
    disableRetina: false,
    enablePreview: true,
    bookmarks: true,
    landscapeDoublePage: true,
    landscapeSingleFirstPage: true,
    toolbarBackgroundColor: null,
    textColor: null,
    enableShare: false
};
    PDFReader.open(f, option, success, error);*/
    window.open(f,'_system', 'location=yes');
  }
function onDeviceReady() {
  var fileUrl = 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf';
  var fileName = 'pdf-sample.pdf';
	var fileTransfer = new FileTransfer();
	var uri = encodeURI(fileUrl);
  var fileUrl = cordova.file.documentsDirectory;
  //var fileUrl = cordova.file.externalRootDirectory;
  
  
 // alert(fileUrl)
		fileTransfer.download(
			uri,
			fileUrl + "/" + fileName,
			function (entry) {
			entry.file(function (file) {
				    //alert(entry.toURL());
            //alert(file.type);
            openFile(entry.toURL());
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