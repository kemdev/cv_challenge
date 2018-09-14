HarryPotterSeries = [
	"Harry Potter and the Philosopher’s Stone",
	"Harry Potter and the Chamber of Secrets",
	"Harry Potter and the Prisoner of Azkaban",
	"Harry Potter and the Goblet of Fire",
	"Harry Potter and the Order of the Phoenix",
	"Harry Potter and the Half-Blood Prince",
	"Harry Potter and the Deathly Hallows"
]

console.log(HarryPotterSeries);

HarryPotterSeries.push("Harry Potter and the Deathly Hallows - part 2",
"Harry Potter’s Son");

console.log(HarryPotterSeries);

HarryPotterSeries.pop();

console.log(HarryPotterSeries);


HarryPotterSeries.splice(6, 1, "Harry Potter and the Deathly Hallows - part 1");

console.log(HarryPotterSeries);

HarryPotterSeries.unshift("Harry Potter (film series)");

console.log(HarryPotterSeries);

// -----------
// Year Looop!
// ------------

var yr = 2000;
for (var i = 1; i < HarryPotterSeries.length; i++){
	if (i === 3 || i === 5 || i === 7  ){
		yr += 2
	} else {
		yr ++
	}
	  HarryPotterSeries[i] += " (" + yr + ")";
}

console.log(HarryPotterSeries);
