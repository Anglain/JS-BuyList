$(function(){

    var $list = $(".bl-list");
    var ONE_ROW_TEMPLATE = $(".row-template").html();

    var $list_right_left = $(".bl-title-left");
    var $list_right_bought = $(".bl-title-bought");
    var ONE_LEFT_ITEM_TEMPLATE = $(".bought-template").html();
    var ONE_BOUGHT_ITEM_TEMPLATE = $(".left-template").html();

    var $input = $(".bl-in");

    function addItem(title) {
        var $node = $(ONE_ROW_TEMPLATE);
        var $nodeRight = $(ONE_LEFT_ITEM_TEMPLATE);
        var $nodeBought = $(ONE_BOUGHT_ITEM_TEMPLATE);

        var quantity = 1;

        var $quantity_label = $node.find(".bl-label");
        $quantity_label.text(quantity);

        var $quantity_label_right = $nodeRight.find(".bl-left-number");
        $quantity_label_right.text(quantity);

        var $quantity_label_bought = $nodeBought.find(".bl-left-number");
        $quantity_label_bought.text(quantity);

        $node.find(".bl-product").text(title);
        $nodeRight.find(".bl-left-text").text(title);
        $nodeBought.find(".bl-left-text").text(title);

        $nodeBought.hide();
        $node.find(".bl-name").hide();

        $node.find(".bl-unbought-button").css("display","none");

        $node.find(".bl-plus").click(function() {
            $node.find(".bl-label").fadeOut("normal", function() {
                quantity++;
                $quantity_label.text(quantity);
                $quantity_label_right.text(quantity);
                $quantity_label_bought.text(quantity);
                if (quantity > 1) {
                    $node.find(".bl-minus").css("opacity", "1");
                    $node.find(".bl-minus").prop("disabled", false);
                }
            });
            $node.find(".bl-label").fadeIn();
        });

        $node.find(".bl-minus").click(function() {
            $node.find(".bl-label").fadeOut("normal", function(){
                if (quantity > 1) {
                    quantity--;
                    $quantity_label.text(quantity);
                    $quantity_label_right.text(quantity);
                    $quantity_label_bought.text(quantity);

                    if (quantity === 1){
                        $node.find(".bl-minus").css("opacity","0.5");
                        $node.find(".bl-minus").prop("disabled", true);
                    }
                }
            });
            $node.find(".bl-label").fadeIn();
        });

        $node.find(".bl-remove-button").click(function(){
            $node.slideUp("normal", function () {
                $node.remove();
                $nodeRight.remove();
            });
        });

        $node.find(".bl-bought-button").click(function(){
            $node.fadeOut("normal", function() {
                $node.find(".bl-bought-button").css("display","none");
                $node.find(".bl-unbought-button").css("display","inline");
                $node.find(".bl-remove-button").css("display","none");
                $node.find(".bl-plus").css("display","none");
                $node.find(".bl-minus").css("display","none");
                $node.find(".bl-product").css("textDecoration","line-through");

                $nodeBought.show();
                $nodeRight.hide();
            });
            $node.fadeIn("normal");
        });

        $node.find(".bl-unbought-button").click(function(){
            $node.fadeOut("normal", function() {
                $node.find(".bl-bought-button").css("display","inline");
                $node.find(".bl-unbought-button").css("display","none");
                $node.find(".bl-remove-button").css("display","inline");
                $node.find(".bl-plus").css("display","inline");
                $node.find(".bl-minus").css("display","inline");
                $node.find(".bl-product").css("textDecoration","none");

                $nodeBought.hide();
                $nodeRight.show();
            });
            $node.fadeIn("normal");
        });

        $node.find(".bl-minus").css("opacity","0.5");
        $node.find(".bl-minus").prop("disabled", true);

        $list.append($node);
        $list_right_left.append($nodeRight);
        $list_right_bought.append($nodeBought);
    }

    $(".bl-add-button").click(function() {
        var name = $input.val();

        if (name.trim()) {
            addItem(name);
            $input.val("");
            $input.focus();
        }
    });

    $input.keydown(function(e) {
        if (e.which === 13) {
            var name = $input.val();

            if (name.trim()) {
                addItem(name);
                $input.val("");
                $input.focus();
            }
        }
    });

    addItem("Печиво");
    addItem("Шоколад");
    addItem("Вафлі");
    addItem("Яблочкі");
});