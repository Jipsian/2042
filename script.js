(function($) {

	$.fn.game = function() {

		var win = false;


		/* CREATE / REFRESH GRID */

		$('#select option').on("click", function() {
			size = $(this).val();
			refreshGrid(size);
		})

		function createGrid (size) {
		    for (var rows = 0; rows < size; rows++) {
		        for (var columns = 0; columns < size; columns++) {
		            $("#container").append("<div class='grid' x='" + columns + "' y='" + rows + "'><span></span></div>");
		        }
		    }

		    value = 480 / size;   	
		    fontSize = 120;

		    $(".grid").width(value);
		    $(".grid").height(value);
		    $(".grid").css("fontSize", (fontSize/size));
		    initNumbers(size);	
		};

		$("#container").on("click", ".grid", function () {
		    console.log($(this).position());	
		})

		function clearGrid () {
		    $(".grid").remove();
		};

		function refreshGrid (size) {
		    clearGrid();
		    createGrid(size);
		};

		$(document).ready(function () {
			$('#select').prop('selectedIndex',0);
		    createGrid(4);
		});


		/*RELOAD*/

		$("#newGame").on("click", function () {
			location.reload();
		});


		/* FIRST VALUES */

		function initNumbers (size) {
			size = $("#select option:selected").val();
			var firstNumber = 2;
			var secondNumber = 4;
			var firstPosition = Math.round(Math.random() * (size - 1));
			var secondPosition = Math.round(Math.random() * (size - 1));			
			var thirdPosition = Math.round(Math.random() * (size - 1));
			var fourthPosition = Math.round(Math.random() * (size - 1));
			console.log(firstPosition, secondPosition, thirdPosition, fourthPosition);

			$(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text(firstNumber);

			if (firstPosition != thirdPosition && secondPosition != fourthPosition) {
				$(".grid[x='" + thirdPosition + "'][y='" + fourthPosition + "'] span").text(secondNumber);	
			} else if (firstPosition == thirdPosition && secondPosition != fourthPosition) {
				if (thirdPosition == 0) {
					thirdPosition = thirdPosition + 1;		
				} else if (thirdPosition == 4){
					thirdPosition = thirdPosition - 1;
				} else {
					thirdPosition = thirdPosition + 1;
				}
				$(".grid[x='" + thirdPosition + "'][y='" + fourthPosition + "'] span").text(secondNumber);	
			} else if (firstPosition != thirdPosition && secondPosition == fourthPosition) {
				if (fourthPosition == 0) {
					fourthPosition = fourthPosition + 1;		
				} else if (fourthPosition == 4){
					fourthPosition = fourthPosition - 1;
				} else {
					fourthPosition = fourthPosition + 1;
				}
				$(".grid[x='" + thirdPosition + "'][y='" + fourthPosition + "'] span").text(secondNumber);	
			}
		}

		function moveGrid () {

		}

		function addNumber (size) {
			var countTwo = 0;	
			var countFour = 0;
			var two = 2;
			var four = 4;
			var dice = Math.random();
			var firstPosition = Math.round(Math.random() * (size - 1));
			var secondPosition = Math.round(Math.random() * (size - 1));
			if ()
		}

		function addColorsToBlock () {

		}

		function isWin () {

		}

	};
})(jQuery);