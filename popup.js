// function to create a new folder from the browser
$(function(){
	// listen for the click event on the 'Make New Folder'
	chrome.storage.sync.get('folderList',function(existingFolderList){
		console.log('existing folders: ' + existingFolderList);
		});
	$('#makeNewFolder').click(function(){
		// on click:
		chrome.storage.sync.get('folderList',function(existingFolderList){
		console.log('inside click');
		console.log('existing folders: ' + existingFolderList);
		});	

	});
});
