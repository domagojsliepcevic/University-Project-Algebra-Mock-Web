$(function () {
  $("#txtName").autocomplete({
    source: "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan",
    search: $("#txtName").val(),
    focus: (event, ui) => {
      event.preventDefault();
      $("#txtName").val(ui.item.label);
    },
    select: function (event, ui) {
      event.preventDefault();
      const id = ui.item.value;
      $.ajax({
        url: `http://www.fulek.com/VUA/supit/GetKolegij/${id}`,
        success: function (data) {
          const { id, kolegij, ects, predavanja, sati, vjezbe, tip } = data;
          insertIntoTable(id, kolegij, ects, predavanja, sati, vjezbe, tip);
          $("#txtName").val("");
          $("#table").fadeIn(1000);
        },
      });
    },
  });
});
function insertIntoTable(id, kolegij, ects, predavanja, sati, vjezbe, tip) {
  $("#table")
    .find("tbody")
    .append(
      $("<tr>")
        .append($("<td>").text(kolegij))
        .append($("<td>").text(ects))
        .append($("<td>").text(sati))
        .append($("<td>").text(predavanja))
        .append($("<td>").text(vjezbe))
        .append($("<td>").text(tip))
        .append(
          $("<td>").append(
            $(`<button id="btn-${id}" class="btn">Obriši</button>`)
          )
        )
    );
  sum(ects, sati);

  $(`#btn-${id}`).on("click", function () {
    const id = $(this).prop("id");
    console.log(this);

    removeFromTable(ects, sati);
    $(this).parent().parent().remove();
  });
}

var totalEcts = 0;
var totalH = 0;

function removeFromTable(ects, sati) {
  totalEcts = totalEcts - ects;
  totalH = totalH - sati;
  $("#rowEcts").text(totalEcts);
  $("#rowHours").text(totalH);
  console.log("After remove:", totalEcts, totalH);
}

function sum(ects, sati) {
  totalEcts += Number(ects);
  totalH += Number(sati);
  $("#rowEcts").text(totalEcts);
  $("#rowHours").text(totalH);
  console.log("After sum: ", totalEcts, totalH);
}
