$(document).ready(function() {
    $(document).on("click", "button#calculate", function() {
        $.ajax({
            url: "https://run.mocky.io/v3/d4e997fe-43ae-436d-b60c-31c305399520",
            method: "GET",
        }).done(function(response) {
            var data = new FilterData(response);
            data.filterData().mutateData().displayData();
        });
    });
});

function FilterData(input) {
    this.data = input;
    this.filter = $('input[name="filter"]:checked').val();
    this.action = $('input[name="action"]:checked').val();
    this.display = $('input[name="display"]:checked').val();

    this.filterData = () => {
        switch(this.filter) {
            case "even":
                this.data = this.data.filter(e => e % 2 === 0);
            break;
            case "odd":
                this.data = this.data.filter(e => e % 2 !== 0);
            break;
            default: 

            break;
        }
        return this;
    }

    this.mutateData = () => {
        switch(this.action) {
            case "increase":
                this.data = this.data.map(e => e + 3);
            break;
            case "multiply":
                this.data = this.data.map(e => e * 2);
            break;
            default: 
            break;
        }
        return this;
    }

    this.displayData = () => {
        switch(this.display) {
            case "log":
                console.log(this.data)
            break;
            case "alert":
                alert(this.data)
            break;
            default: 
            break;
        }
        return this;
    }
}