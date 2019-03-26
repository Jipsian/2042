(function($) {

	$.fn.game = function() {

		var win = false;
		var round = 1;

		var size = $('#select option:selected').val();

		/* CREATE / REFRESH GRID */

		$('#select option').on("click", function() {
			size = $(this).val();
			refreshGrid(size);
		});

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
		}

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

			$(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text(firstNumber);

			if (firstPosition != thirdPosition || secondPosition != fourthPosition) {
				$(".grid[x='" + thirdPosition + "'][y='" + fourthPosition + "'] span").text(secondNumber);	
			} else {
				if (firstPosition == thirdPosition) {
					thirdPosition++;
					if (thirdPosition == 0) {
						$(".grid[x='1'][y='" + fourthPosition + "'] span").text(secondNumber);	
					} else if (thirdPosition == 4) {
						$(".grid[x='3'][y='" + fourthPosition + "'] span").text(secondNumber);	
					} else {
						$(".grid[x='" + thirdPosition + "'][y='" + fourthPosition + "'] span").text(secondNumber);	
					}
				} else if (secondPosition == fourthPosition) {
					fourthPosition++;
					if (fourthPosition == 0) {	
						$(".grid[x='" + thirdPosition + "'][y='1'] span").text(secondNumber);		
					} else if (fourthPosition == 4) {
						$(".grid[x='" + thirdPosition + "'][y='3'] span").text(secondNumber);		
					} else {
						$(".grid[x='" + thirdPosition + "'][y='" + fourthPosition + "'] span").text(secondNumber);		
					}
				}
			}
			addColorsToBlock(size);
		}


		/* LISTEN EVENTS */

		$(document).keydown(function (e) {
		    if (e.which == 37) { // GO LEFT BITCH
		       	addNumber(size);
		    } else if (e.which == 38) { // GO UP BITCH
		    	addNumber(size);
		    } else if (e.which == 39) { // GO RIGHT BITCH
		    	addNumber(size);
		    } else if (e.which == 40) { // GO DOWN BITCH
				addNumber(size);
		    }
		});


		/* ADD NUMBER WHEN MOVING */

		function addNumber (size) {
			var two = 2;
			var four = 4;
			var firstPosition = Math.round(Math.random() * (size - 1));
			var secondPosition = Math.round(Math.random() * (size - 1));
			
			if (round == 1) {
				if ($(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text() == "") {
					$(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text(two);
					round++;
				} else {
					addNumber(size);
				}
			} else {
				if (Math.random() >= 0.66) {
					if ($(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text() == "") {
						$(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text(four);
						round++;
					} else {
						addNumber(size);
					}
				} else {
					if ($(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text() == "") {
						$(".grid[x='" + firstPosition + "'][y='" + secondPosition + "'] span").text(two);
						round++;
					} else {
						addNumber(size);
					}
				}
			}
			addColorsToBlock(size);
		}


		/* MOVE GRID */

		function moveGrid () {

		}


		/* BLOCK COLOR DEPENDING ON NUMBER */

		function addColorsToBlock (size) {
			for (var rows = 0; rows < size; rows++) {
		        for (var columns = 0; columns < size; columns++) {
		        	if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "2")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ffff99");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "4")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ffff66");		        		
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "8")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ffff00");		        		
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "16")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ffcc00");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "32")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ff9900");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "64")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ff3300");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "128")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#cc3300");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "256")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#ff0000");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "512")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#cc0000");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "1024")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#990000");
		        	} else if (($(".grid[x='" + columns + "'][y='" + rows + "'] span").text() == "2048")) {
		            	$(".grid[x='" + columns + "'][y='" + rows + "']").css("backgroundColor", "#800000");
		        	}
		        }
		    }
		}


		/* CHECK WIN */	

		function isWin () {

		}

	};
})(jQuery);