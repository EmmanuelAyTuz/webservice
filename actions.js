$(document).ready(function () {
  $("#pedir").trigger("click");
  //$("#formlock").sticky({topSpacing:50});
});

$("#actualizar").click(() => {
  $("#crear").prop("disabled", false);
  $("#actualizar").prop("hidden", true);
  $.post(
    "webservice.php",
    {
      update_user: 1,
      id: $("#id").val(),
      nombre: $("#nombre").val(),
      edad: $("#edad").val(),
      genero: $("#genero").val(),
    },
    function (data) {
      console.log(data);
      $("#pedir").trigger("click");
    }
  );
});

$("#pedir").click(function () {
  $.post(
    "webservice.php",
    {
      all_users: 1,
    },
    function (data) {
      let users = JSON.parse(data);
      if (users.id == 0) {
        console.log(users);
        $("#count").html("");
        $("#cards").html("");
        $("#lista h3").append(users.msg);
      } else {
        $("#cards").html("");
        $("#count").html("");
        $("#lista h3").append(users.length);
        for (let j = 0; j < users.length; j++) {
          $("#cards").append(
            "<div class='col-sm-6 pb-2'><div class='card'><div class='card-body'><h5 class='card-title'><b>" +
              users[j].nombre +
              "</b></h5><p class='card-text'>" +
              "ID: " +
              users[j].id +
              "<br>Genero: " +
              users[j].genero +
              "<br>Edad: " +
              users[j].edad +
              "</p><button id='" +
              users[j].id +
              "' type='button' class='btn btn-outline-primary' onClick='upclick(this.id)'>Actualizar</button> <button id='" +
              users[j].id +
              "' type='button' class='btn btn-outline-danger' onClick='delclick(this.id)'>Eliminar</button></div></div></div>"
          );
        }
      }
    }
  );
});

function delclick(clicked) {
  let b = clicked;
  $.post(
    "webservice.php",
    {
      delete_user: 1,
      id: b,
    },
    function (data) {
      $("#pedir").trigger("click");
    }
  );
}

function upclick(clicked) {
  let b = clicked;
  $.post(
    "webservice.php",
    {
      single_user: 1,
      id: b,
    },
    function (data) {
      let user = JSON.parse(data);
      console.log(user);
      $("#nombre").html("");
      $("#crear").prop("disabled", true);
      $("#actualizar").prop("hidden", false);
      $("#id").val(user[0].id);
      $("#nombre").val(user[0].nombre);
      $("#edad").val(user[0].edad);
      $("#genero").val(user[0].genero);
    }
  );
}

$("#crear").click(function () {
  $.post(
    "webservice.php",
    {
      create_user: 1,
      nombre: $("#nombre").val(),
      edad: $("#edad").val(),
      genero: $("#genero").val(),
    },
    function (data) {
      $("#pedir").trigger("click");
    }
  );
});
