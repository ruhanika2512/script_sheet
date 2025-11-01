let day=3;
let weekName = (day===1) ? 'monday' :
	(day===2) ? 'tuesday' :
	(day===3) ? 'wednesday' :
	(day===4) ? 'thursday' :
	(day===5) ? 'friday' :
	(day===6) ? 'saturday' :
	(day===7) ? 'sunday' :
	'invalid day';
console.log(weekName);
