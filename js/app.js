//
//
var app = {
    version     : '1.0.0',
    targetEvent : 'click',
    isLocalStorageAvailable : false,
    isCameraAvailable : false,
    isCordova   : false,

    //
    hook : function () {
        $('#saveButton').on(app.targetEvent, note.handleInput);
        $('#keysButton').on(app.targetEvent, note.getKeys);
    },
    //
    onDOMContentLoaded : function () {
        //alert("onDOMContentLoads next");
        //
        FastClick.attach(document.body);
        app.targetEvent                           = 'click';
        app.isCordova                             = (typeof window.cordova !== "undefined");
        app.isLocalStorageAvailable               = localStore.isStorageAvailable('localStorage');
        //
        document.getElementById('appIcon').src    = 'img/bellpepper.png';
        document.getElementById('test').innerHTML = 'app.onDOMContentLoaded';
        document.getElementById('isCordova').innerHTML = app.isCordova;
        document.getElementById('isCordova').style.backgroundColor = '#aaccff'; // blueish color
        document.getElementById('isLocalStorageAvailable').innerHTML = app.isLocalStorageAvailable;
        //
        app.hook();
    },
    //
    onDeviceReady : function () {
        //alert("onDeviceReady next");
        app.targetEvent                           = 'touchend';
        app.isCordova                             = (typeof window.cordova !== "undefined");
        app.isCameraAvailable                     = cameraPlugin.isCameraAvailable();
        //
        document.getElementById('appIcon').src    = 'img/apple.png';
        document.getElementById('test').innerHTML = 'app.onDeviceReady';
        document.getElementById('isCordova').innerHTML               = app.isCordova;
        document.getElementById('isCordova').style.backgroundColor   = '#ccffcc'; // greenish color
        document.getElementById('isCameraAvailable').innerHTML       = app.isCameraAvailable;
    }
};