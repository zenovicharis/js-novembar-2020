const appId = "0321f27c";
const appKey = "59fa5c20dbfe1466b2303af704ae280c";
$(function(){
    $("#search-form").validate({
        submitHandler: function(form, event) {
            var validFields = $(form).children(".valid");
            var data = Array.from(validFields).reduce((acc, e) => {
                var name = $(e).attr("name");
                var value = $(e).val();

                acc[name] = value;
                return acc;
            }, {})

            console.log(Object.keys(data));
            var queryString = Object.keys(data).reduce((acc, e) => {
                acc += e + "=" + data[e] + "&";

                return acc;
            }, "").slice(0, -1);

            console.log(queryString);

            $(".loader").css("display", "flex");
            $.ajax({
                url: "https://api.edamam.com/search?app_key="+ appKey+ "&app_id="+ appId + "&" + queryString,
                type: "GET"
            }).done((res) => {
                console.log(res);
                var totalCount = res.count;
                var recipes = res.hits.map(e => e.recipe)
                console.log(totalCount, recipes);

                recipes.forEach(e => {
                    displayRecipesInResultDiv(e)
                });
                $(".loader").css("display", "none");
            })

            form.reset()
        },
        messages: {
            q: "Please fill out this field for recipes"
        }
    })
});

const displayRecipesInResultDiv = function(recipe) {
    var result = $("#recipes");
    var recipeElement = $("<div>").attr("class", "recipe-element").append(
        $("<img>").attr("src", recipe.image),
        $("<div>").attr("class", "labels").append(
            $("<h3>").attr("class", "recipe-title").text(recipe.label),
            $("<p>").attr("class", "calories").text(recipe.calories.toFixed(2)),
            $("<a>").attr("class", "btn-recipe").attr("target", "_blank").attr("href", recipe.shareAs).text("See More"),
        )
    );
    result.append(recipeElement);
}
