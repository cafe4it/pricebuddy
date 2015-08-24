Meteor.startup(function(){
    clientId = Meteor.cookie.get('Pb_ClientId');
    if(!clientId){
        clientId = Random.id(20);
        Meteor.cookie.set('Pb_ClientId', clientId);
    }
})