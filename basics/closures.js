
// var name = "Absar Ahmad"

// //global scope
// function local(){
//     // local scope
//     var name = "Absar Ahmad"
// }
// console.log(name);
// local();

//global scope
function subscribe(){
    var name = "Absar Ahmad";
    // inner scope 2
    function displayName(){
        // inner scope 1
        console.log(name); // name is accessible beacuse it initialized in scope
    }
    displayName();
}

subscribe();