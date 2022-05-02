// write js code here corresponding to matches.html
var schedule = JSON.parse(localStorage.getItem("schedule")) || []
var favourites = JSON.parse(localStorage.getItem("favourites")) || []

var filtervenue = document.querySelector('#filterVenue')

display(schedule);

filtervenue.addEventListener('click', function (e) {
	filter(e.target.value);
})


function display(data) {
	let tbody = document.querySelector("tbody")

	tbody.innerHTML = null

	data.forEach(function (e) {
		tbody.append(createRow(e))
	})
}


function createRow(data) {

	var row = document.createElement("tr")
	var teamA = document.createElement("td")
	var teamB = document.createElement("td")
	var date = document.createElement("td")
	var venue = document.createElement("td")
	var matchNum = document.createElement("td")
	var favourite = document.createElement("td")

	favourite.addEventListener("click", function () {
		favourites.push(data);
		localStorage.setItem("favourites", JSON.stringify(favourites))
	})

	teamA.innerHTML = data.teamA
	teamB.innerHTML = data.teamB
	date.innerHTML = data.date
	venue.innerHTML = data.venue
	matchNum.innerHTML = data.matchNum

	favourite.innerHTML = "Add to favorites"
	favourite.style.color = "green"
	favourite.style.fontweight = "bold"
	favourite.style.cursor = "pointer"

	row.append(matchNum, teamA, teamB, date, venue, favourite)

	return row
}

function filter(val) {
	if (val === "none")
		display(schedule)
	else
		display(schedule.filter(ele => ele.venue === val))
}