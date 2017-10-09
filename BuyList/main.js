$(function(){

    var $list = $(".bl-list");
    var ONE_ROW_TEMPLATE = $(".row-template").html();

    var $bl_bought = $(".bl-bought");
    var $left = $bl_bought.find(".bl-title-left");
    var $bought = $bl_bought.find(".bl-title-bought");
    var ONE_BOUGHT_TEMPLATE = $(".bought-template").html();

    function addItem(title) {
        var $node = $(ONE_ROW_TEMPLATE);
        var $nodeRight = $(ONE_BOUGHT_TEMPLATE);

        var quantity = 1;

        var $quantity_label = $node.find(".bl-label");
        $quantity_label.text(quantity);

        var $quantity_label_right = $nodeRight.find(".bl-left-number");
        $quantity_label_right.text(quantity);

        $node.find(".bl-product").text(title);
        $nodeRight.find(".bl-left-text").text(title);

        $node.find(".bl-plus").click(function() {
            quantity++;
            $quantity_label.text(quantity);
            $quantity_label_right.text(quantity);
        });

        $node.find(".bl-minus").click(function() {
            if (quantity > 1) {
                quantity--;
                $quantity_label.text(quantity);
                $quantity_label_right.text(quantity);
            }
        });

        $node.find(".bl-remove-button").click(function(){
           $node.remove();
           $nodeRight.remove();
        });

        $list.append($node);
        $left.append($nodeRight);
    }


    addItem("Помідори");
    addItem("Огірки");
    addItem("Маргальцовка");
    addItem("Яблочкі");

    console.log("Яблочкі!!!");
});