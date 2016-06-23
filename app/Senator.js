/**
 * VoterList class which represents the results of a roll call
 **/

(function(app) {
  app.Senator = ng.core.Class({
    constructor: function(name, state, party, votedYea) {
      this.state = state;
      this.name = name;
      this.party = party;
      this.votedYea = votedYea
    }
  });
})(window.app || (window.app = {}));
