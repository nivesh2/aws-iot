var awsIot = require('aws-iot-device-sdk');

/*var device = awsIot.device({
  keyPath: 'cert/private.pem.key',
  certPath: 'cert/certificate.pem.crt',
    caPath: 'cert/root-CA.crt',
  clientId: 'digit',
    region: 'us-west-2'
});
*/

module.exports = {
    publish: function(req,res,cb){
        
        var device = awsIot.device({
           keyPath: 'cert/private.pem.key',
          certPath: 'cert/certificate.pem.crt',
            caPath: 'cert/root-CA.crt',
          clientId: 'digit',
            region: 'us-west-2'
        });
        
        device.on('connect', function() {
            console.log('connecting || iot.js');
            
            device.publish('aws/thing/light-ON', req.params.id);
            
            console.log('Published || message: ', req.params.id ,' || iot.js');
            
            device.end(false, function(){
             console.log('iot connectiong closed');
             cb(true);
            });
            
        });
        device.on('error', function(error) {
            console.log('error', error);
            cb(false);
        });
       
        
    }
};
