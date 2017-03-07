import Ember from 'ember';

export default Ember.Route.extend({

  userFromParams: null,

  model(params) {
    this.set('userFromParams', params.user_name);
    return this.store.findAll('messages');
  },


  actions: {
    createMessage(messages) {
      let newRecord = this.store.createRecord('messages', {
        text: messages,
        user:'Rouz'
      });

      newRecord.save();

      this.controller.set('textMessageFromInput', '');
    }
  }
});
