$(document).ready(function() {
    $("#runSim").click(function() {
        var data = {
            param: "getAll",
        };

        $.ajax({
            url: "getData.php",
            data: data,
            type: "POST",
            dataType: 'JSON',
            success: function(e) {
                simulation(formData, e)
            },
        });
    });
});

function simulation (form, data){
	var years = (form.retirementEndYear-form.retirementStartYear+1); //years per simulation cycle
	var cycles = data.length-years;
	var sim = [];	//primary simulation output container
	for(var i=0;i<cycles;i++){
		var cyc = cycle(i, (i+years), data);
		sim.push(cyc);
	}
	console.log(sim);
};

function cycle (start, end, data){
	var cyc = [];

	for(var i=start;i<end;i++){
		cyc.push(data[i].Date);
	}
	return cyc;
};

