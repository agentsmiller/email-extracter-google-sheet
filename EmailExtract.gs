
var sheet = SpreadsheetApp.getActiveSheet();
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

function getEmails() {
  var label = GmailApp.getUserLabelByName("SampleLabel");
  var threads = label.getThreads();
  var row = 2;
  for (var i = 0; i < threads.length; i++) {
    var messages=threads[i].getMessages();
    for (var m=0; m < messages.length; m++) {   
      sheet.getRange(row,1).setValue(messages[m].getPlainBody());
      row++;
    }
  }
}
