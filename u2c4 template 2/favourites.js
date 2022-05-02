// write js code here corresponding to favourites.html
let favourites = JSON.parse(localStorage.getItem("favourites")) || []

display(favourites)

function display(data) {
	let tbody = document.querySelector("tbody")

	tbody.innerHTML = null

	data.forEach(function (e, index) {
		tbody.append(createRow(e, index))
	})
}

function createRow(data, index) {

	var row = document.createElement("tr")
	var teamA = document.createElement("td")
	var teamB = document.createElement("td")
	var date = document.createElement("td")
	var venue = document.createElement("td")
	var matchNum = document.createElement("td")
	var favourite = document.createElement("td")

	favourite.addEventListener("click", function () {
		favourites.splice(index, 1)
		localStorage.setItem("favourites", JSON.stringify(favourites))
		display(favourites)
	})

	teamA.innerHTML = data.teamA
	teamB.innerHTML = data.teamB
	date.innerHTML = data.date
	venue.innerHTML = data.venue
	matchNum.innerHTML = data.matchNum

	favourite.innerHTML = "Remove from favorites"
	favourite.style.color = "red"
	favourite.style.fontweight = "bold"
	favourite.style.cursor= "pointer"

	row.append(matchNum, teamA, teamB, date, venue, favourite)

	return row
}