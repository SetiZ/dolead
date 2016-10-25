var form_type = [
	{
		"name":"user_id",
		"type": "number",
		"input": "multiple",
	},
	{
		"name":"count",
		"type":"number",
		"compare": true,
	},
	{
		"name":"created_at",
		"type":"date",
		"compare": true,
	},
	{
		"name": "type",
		"type": "select",
		"input": "multiple|checkbox",
	}
]

var input = ""

for (var i= 0; i< form_type.length; i++){
	switch (form_type[i].type) {
		case "date":
			input = '<input name="'+form_type[i].name+'" type="text" id="datepicker">' // add jquery script for date picker too
			break
		case "number":
			input = '<input name="'+form_type[i].name+'" type="number" id="'+form_type[i].name+'">'
			break
		case "select":
			input = '<select name="'+form_type[i].name+'" id="event_type"><option value="SIGNED_UP">signé</option><option value="CLICKED">clické</option></select>'
			break
		default:
			break
	}
	console.log(input)
}