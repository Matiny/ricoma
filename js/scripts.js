$("document").ready(() => {

    //Timer!

    let finish = new Date("Jan 1, 2020 00:00:00").getTime();
    console.log(finish);

    var timer = setInterval(function() {

        var start = new Date().getTime();
      
        var timedifference = finish - start;
      
        var days = Math.floor(timedifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timedifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timedifference % (1000 * 60)) / 1000);
      
        $(".days").text(days);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".seconds").text(seconds);

        if (timedifference < 0) {
          clearInterval(timer);
        }
      }, 1000);

      // Cart!

      let products = [];

      let addOrRemove = (number) => {
        $("#button" + number).click(() => {
            if (products.find(product => product === "product" + number)) {
                products = products.filter(item => item !== 'product' + number)
                $("#button" + number).text("Add to cart");
            }
            else {
                products.unshift("product" + number);
                $("#button" + number).text("Remove from cart");
            }

            if (products.length > 0) {
                $(".count").show().text(products.length);
            } else {
                $(".count").hide();
            }
            
            console.log(products);  
      });
      }

      let cartFunction = () => {
          addOrRemove(1);
          addOrRemove(2);
          addOrRemove(3);
          addOrRemove(4);

      }

      cartFunction();

      
    
})