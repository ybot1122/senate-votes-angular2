(function(app) {
  app.RollCallDetail = ng.core.Component({
    selector: 'rollcall-detail',
    template: `<h3>oogabooga</h3>`
  })
  .Class({
    constructor: function() {
      this.voteDocumentText = 'To address gun violence and improve the availability of records to the National Instant Criminal Background Check System.';
      this.result = 'Cloture Motion Rejected (53-47, 3/5 majority required)';
      this.yeas = 53;
      this.nays = 47;
    }
  });
})(window.app || (window.app = {}));
