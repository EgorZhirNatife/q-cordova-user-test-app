document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    function onSuccess(result) {
        try {
            alert(JSON.stringify(result))
        } catch (e) {
            alert(e)
        }
    };

    function onError(result) {
        alert("Error: " + JSON.stringify(result))
    };

    try {
        Q.Users.Cordova.Labels.getAll(onSuccess, onError) // works
        // Q.Users.Cordova.Labels.get(["24822a590a16cebf"], onSuccess, onError) // works
        // Q.Users.Cordova.Labels.save({
        //     "labelId": "24822a590a16cebf",
        //     "title": "TestGroup"
        //   }, onSuccess, onError) // works
        // Q.Users.Cordova.Labels.remove("1c0301fc8976b3b3", onSuccess, onError) // works
        // Q.Users.Cordova.Labels.addContact("d", [4], onSuccess, onError) // works
        // Q.Users.Cordova.Labels.removeContact("7e374dc188e67415", [4], onSuccess, onError) // works
        // Q.Users.Cordova.Labels.setForContact(2 ,["24822a590a16cebf", "7e374dc188e67415"], onSuccess, onError) // works
        // Q.Users.Cordova.Labels.forContacts([4], true, onSuccess, onError) // works
        // Q.Users.Cordova.Labels.smart("hasPhoto", onSuccess, onError) // works
        // Q.Users.Cordova.Labels.checkContactsAccount([2, 5], onSuccess, onError) // works
        // Q.Users.Cordova.Labels.checkLabelsAccount(["d","24822a590a16cebf","3f336c768918b9dd"], onSuccess, onError) // works
        // Q.Users.Cordova.UI.show(3, onSuccess, onError) // works
        Q.Users.Cordova.UI.create(onSuccess, onError) // works
    } catch (e) {
        alert(e) 
    }
    
}