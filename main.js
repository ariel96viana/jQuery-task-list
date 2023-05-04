$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const newTask = $("input").val();
    console.log(newTask);

    const createNewTask = $(`
    <li><input class="checkbox-task" type="checkbox" id="${newTask}" />
      <label for="${newTask}">${newTask}</label></li>
    `);

    $(createNewTask).appendTo("ul");

    $("input").val("");
  });
});
