(function(app) {
  // data structure that stores senators who voted on a bill
  // with functions to sort and extact senators by certain fields
  app.VoterList = ng.core.Class({
    constructor: function(bill) {
      this.bill = bill;
      this.yeaVotes = 0;
      this.totalVotes = 0;
      this.voters = {};
    },

    addSenatorVote: function(senator, votedYea) {
      // assert: senator is instanceOf app.Senator
      // assert: vote is boolean (true/false)
      // check if two senators for a state already exist

      var state = senator.state;

      if (!this.voters.state) {
        this.voters.state = [];
        this.voters.state.push({
          senator: senator,
          yea: votedYea
        });
      }

      if (this.voters.state.length < 2) {

      } else {
        // code smell?
        console.error('States only get two senators each');
      }
    }
  });

  app.Senator = ng.core.Class({
    constructor: function(name, state, party) {
      this.state = state;
      this.name = name;
      this.party = party;
    }
  });

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
