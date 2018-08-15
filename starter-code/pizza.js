// Write your Pizza Builder JavaScript in this file.
//$(".green-pepper").hide();

// $(".btn").click(function () {
    function calculatePrice() {
    var totalPrice = 21;
    if ($(".btn-pepperonni").hasClass("active")) {
        totalPrice +=0 ;
    } else {
        totalPrice -= 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
        totalPrice += 0;
    } else {
        totalPrice -= 1;
    }

    if ($(".btn-green-peppers").hasClass("active")) {
        totalPrice += 0;
    } else {
        totalPrice -= 1;
    }

    if ($(".btn-sauce").hasClass("active")) {
        totalPrice += 0;
    } else {
        totalPrice -= 3;
    }

    if ($(".btn-crust").hasClass("active")) {
        totalPrice += 0;
    } else {
        totalPrice -= 5;
    }


    console.log(totalPrice);
    $("#price").text(totalPrice);
};

// $("#price").text("€"+price);

$(".btn-pepperonni").click(function () {
    $(this).toggleClass("active");
    calculatePrice();
    $(".pep").toggle();
    $("li:contains('$1 pepperonni')").toggle();

});

//$(".mushroom").hide();
$(".btn-mushrooms").click(function () {
    $(this).toggleClass("active");
    calculatePrice();
    $(".mushroom").toggle();
    $("li:contains('$1 mushrooms')").toggle();
    // calculatePrice();

});

//$(".pep").hide();
$(".btn-green-peppers").click(function () {
    $(this).toggleClass("active");
    calculatePrice();
    $(".green-pepper").toggle();
    $("li:contains('$1 green peppers')").toggle();
    // calculatePrice();

});

//$(".sauce").removeClass(".sauce-white");
$(".btn-sauce").click(function () {
    $(this).toggleClass("active");
    calculatePrice();
    $(".sauce-white").toggle();
    $("li:contains('$3 white sauce')").toggle();

    // calculatePrice();

});


//$(".crust").removeClass(".crust-gluten-free");
$(".btn-crust").click(function () {
    $(this).toggleClass("active");
    calculatePrice();
    $(".crust").toggleClass("crust-gluten-free");
    $("li:contains($5 gluten-free crust)").toggle();
    // calculatePrice();

});

$(".btn").addClass("active")

// $(".btn").click(function () {
//     $(this).toggleClass("active");
// });