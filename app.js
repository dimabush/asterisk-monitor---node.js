var aio = require('asterisk.io'),
    ami = null;

ami = aio.ami(
    'ip_or_hostname',   // Asterisk PBX machine

    5038,               // the default port number setup
    // in "/etc/asterisk/manager.conf"
    // in "general" section

    'admin',            // manager username

    'admin'             // manager password
);

ami.on('error', function (err) {
    throw err;
});

ami.on('ready', function () {

    // connected && authenticated

    ami.action(
        'Monitor',
        {
            ActionID: value, //ActionID - ActionID for this transaction. Will be returned.
            Channel: value, //Channel - Used to specify the channel to record.
            File: value, //File - Is the name of the file created in the monitor spool directory. Defaults to the same name as the channel (with slashes replaced with dashes).
            Format: value, //Format - Is the audio recording format. Defaults to wav.
            Mix: value //Mix - Boolean parameter as to whether to mix the input and output channels together after the recording is finished.
        },
        function (data) {
            if (data.Response == 'Error') {
                console.log('Monitor', data.Message);
                return;
            }
            console.log('Monitor', data.Message);
        }
    );

});