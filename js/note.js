//
//
var note = {
    version : '0.6.0',

    //
    handleInput : function (eventContext) {
        var epoch   = Date.now();
        var theData = $('#noteNote').val()
        console.log('epoch: ' + epoch);

        if (theData.length == 0) return;

        console.log('note: ' + theData);
        $('#noteNote').val('');
        note.store(epoch, theData);
    },
    //
    store : function (key, text) {
        localStore.put(key, text);
    },
    get : function (key) {
        return localStore.get(key);
    },
    //
    getKeys : function () {
        console.log('getKeys()');
        var theList = "";
        for ( var i = 0, len = localStore.len(); i < len; ++i ) {
            theList = theList + localStore.key( i ) + "<br>";
            console.log(localStore.key( i ),  localStore.get(localStore.key(i)));
        }
        $('#listOfKeys').html(theList);
    }
};