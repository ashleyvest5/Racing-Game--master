$(document).ready(function() {
            console.log("ready!");


            var $snailOne = $('#snailOne');
            var $snailTwo = $('#snailTwo');
            var left = 37;
            var right = 39;
            var moveRight = 0;
            var moveLeft = 0;

            $('body').keydown(function(event) {
                if (event.which === right) {
                    event.preventDefault();
                    //you needed to specify the variable
                    //elements you wanted to select here
                    //the rest looks good
                    $snailOne.css('margin-left', '+=50');
                    if ($snailOne.css('margin-left') == '1300px') {
                        winner($snailOne);
                    }
                }

                if (event.which === left) {
                    event.preventDefault();
                    $snailTwo.css('margin-left', '+=50');
                    if ($snailTwo.css('margin-left') == '1300px') {
                        winner($snailTwo);
                    }
                }
            });

            //good winner function!
            var winner = function(player) {
                if (player == $snailOne) {
                    alert("Snail One Wins! ");
                } else if (player == $snailOne && $snailTwo) {
                    alert("It's A Tie!")
                } else {
                    alert("Snail Two Wins!");
                }
            };

            //how would you implement the reset button? I think you can do it...
    });
