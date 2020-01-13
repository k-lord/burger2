$(document).ready(function() {
    var burgerContainer = $(".burger-container");

    console.log("page ready!")

    // click events for submit button in burger-form
    $(".burger-form").on("submit", function (event) {
        event.preventDefault();
        console.log("you clicked the submit button!");

        var newBurger = {
            name: $("#burg").val().trim(),
        };

        //POST request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    




})






/*
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $(".burger-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
        };

        //POST request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // DELETE REQUEST
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});
*/