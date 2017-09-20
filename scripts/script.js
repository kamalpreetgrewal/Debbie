class Task {
  constructor(description, presentDate) {
    this.description = description;
    this.presentDate = presentDate;
  }
}

var presentDate = new Date();
var tasks = [];

$('form').submit(function(event) {
  var input = $(event.target).find('input');
  var description = $('#comment').val();
  var task = new Task(description, presentDate);
  var taskItem = $('<li>').html(`${description}`);
  if (description != "") {
    taskItem.appendTo('#tasks');
    input.val('');
  }
  tasks.push(task);
  input.html('');
  return false;
});
