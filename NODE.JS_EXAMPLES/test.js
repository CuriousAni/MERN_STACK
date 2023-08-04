var figelt = require("figlet");

figelt("Ani' Shinde", function(err, data){
    if (err){
        console.log("Something is wrong!!");
        console.dir(err);
        return;
    }
    console.log(data);
}
);