/**
 * VoterList class which represents the results of a roll call
 **/

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

      if (!this.voters[state]) {
        this.voters[state] = [];
      }

      // check
      if (this.voters[state].length >= 2) {
        console.error('States only get two senators each');
        return;
      }

      // update internal representation
      this.totalVotes += 1;
      this.yeaVotes += (votedYea) ? 1 : 0;
      this.voters[state].push({
        senator: senator,
        yea: votedYea
      });
    },

    hasMajority: function() {
      return this.yeaVotes / this.totalVotes > .6;
    }
  });
})(window.app || (window.app = {}));
