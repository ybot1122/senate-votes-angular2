(function(app) {

  app.Senators = [
    new app.Senator("Lamar Alexander", "TN", "R", true),
    new app.Senator("Kelly Ayotte", "NH", "R", true),
    new app.Senator("Tammy Baldwin", "WI", "D", false),
    new app.Senator("John Barrasso", "WY", "R", true),
    new app.Senator("Michael Bennet", "CO", "D", false),
    new app.Senator("Richard Blumenthal", "CT", "D", false),
    new app.Senator("Roy Blunt", "MO", "R", true),
    new app.Senator("Cory Booker", "NJ", "D", false),
    new app.Senator("John Boozman", "AR", "R", true),
    new app.Senator("Barbara Boxer", "CA", "D", false),
    new app.Senator("Sherrod  Brown", "OH", "D", false),
    new app.Senator("Richard Burr", "NC", "R", true),
    new app.Senator("Maria Cantwell", "WA", "D", false),
    new app.Senator("Shelley Capito", "WV", "R", true),
    new app.Senator("Ben Cardin", "MD", "D", false),
    new app.Senator("Thomas Carper", "DE", "D", false),
    new app.Senator("Bob Casey", "PA", "D", false),
    new app.Senator("Bill Cassidy", "LA", "R", true),
    new app.Senator("Dan Coats", "IN", "R", true),
    new app.Senator("Thad Cochran", "MS", "R", true),
    new app.Senator("Susan Collins", "ME", "R", true),
    new app.Senator("Christopher Coons", "DE", "D", false),
    new app.Senator("Bob Corker", "TN", "R", true),
    new app.Senator("John Cornyn", "TX", "R", true),
    new app.Senator("Tom Cotton", "AR", "R", true),
    new app.Senator("Mike Crapo", "ID", "R", true),
    new app.Senator("Ted Cruz", "TX", "R", true),
    new app.Senator("Steve Daines", "MT", "R", true),
    new app.Senator("Joe Donnelly", "IN", "D", true),
    new app.Senator("Richard Durbin", "IL", "D", false),
    new app.Senator("Mike Enzi", "WY", "R", true),
    new app.Senator("Joni Ernst", "IA", "R", true),
    new app.Senator("Dianne Feinstein", "CA", "D", false),
    new app.Senator("Deb Fischer", "NE", "R", true),
    new app.Senator("Jeff Flake", "AZ", "R", true),
    new app.Senator("Al Franken", "MN", "D", false),
    new app.Senator("Cory Gardner", "CO", "R", false),
    new app.Senator("Kirsten Gillibrand", "NY", "D", false),
    new app.Senator("Lindsey Graham", "SC", "R", true),
    new app.Senator("Chuck Grassley", "IA", "R", true),
    new app.Senator("Orrin Hatch", "UT", "R", true),
    new app.Senator("Martin Heinrich", "NM", "D", false),
    new app.Senator("Heidi Heitkamp", "ND", "D", false),
    new app.Senator("Dean Heller", "NV", "R", true),
    new app.Senator("Mazie Hirono", "HI", "D", false),
    new app.Senator("John Hoeven", "ND", "R", true),
    new app.Senator("Jim Inhofe", "OK", "R", true),
    new app.Senator("Johnny Isakson", "GA", "R", true),
    new app.Senator("Ron Johnson", "WI", "R", true),
    new app.Senator("Timothy Kaine", "VA", "D", false),
    new app.Senator("Angus King", "ME", "I", false),
    new app.Senator("Mark Kirk", "IL", "R", false),
    new app.Senator("Amy Klobuchar", "MN", "D", false),
    new app.Senator("James Lankford", "OK", "R", true),
    new app.Senator("Patrick Leahy", "VT", "D", false),
    new app.Senator("Mike Lee", "UT", "R", true),
    new app.Senator("Joe Manchin", "WV", "D", false),
    new app.Senator("Edward Markey", "MA", "D", false),
    new app.Senator("John McCain", "AZ", "R", true),
    new app.Senator("Claire McCaskill", "MO", "D", false),
    new app.Senator("Mitch McConnell", "KY", "R", true),
    new app.Senator("Robert Menendez", "NJ", "D", false),
    new app.Senator("Jeff Merkley", "OR", "D", false),
    new app.Senator("Barbara Mikulski", "MD", "D", false),
    new app.Senator("Jerry Moran", "KS", "R", true),
    new app.Senator("Lisa Murkowski", "AK", "R", true),
    new app.Senator("Christopher Murphy", "CT", "D", false),
    new app.Senator("Patty Murray", "WA", "D", false),
    new app.Senator("Bill Nelson", "FL", "D", false),
    new app.Senator("Rand Paul", "KY", "R", true),
    new app.Senator("David Perdue", "GA", "R", true),
    new app.Senator("Gary Peters", "MI", "D", false),
    new app.Senator("Rob Portman", "OH", "R", true),
    new app.Senator("John Reed", "RI", "D", false),
    new app.Senator("Harry Reid", "NV", "D", false),
    new app.Senator("James  Risch", "ID", "R", true),
    new app.Senator("Pat Roberts", "KS", "R", true),
    new app.Senator("Mike Rounds", "SD", "R", true),
    new app.Senator("Marco Rubio", "FL", "R", true),
    new app.Senator("Bernie Sanders", "VT", "I", false),
    new app.Senator("Ben Sasse", "NE", "R", true),
    new app.Senator("Brian Schatz", "HI", "D", false),
    new app.Senator("Charles Schumer", "NY", "D", false),
    new app.Senator("Timothy Scott", "SC", "R", true),
    new app.Senator("Jefferson Sessions", "AL", "R", true),
    new app.Senator("Jeanne Shaheen", "NH", "D", false),
    new app.Senator("Richard Shelby", "AL", "R", true),
    new app.Senator("Debbie Stabenow", "MI", "D", false),
    new app.Senator("Dan Sullivan", "AK", "R", true),
    new app.Senator("Jon Tester", "MT", "D", false),
    new app.Senator("John Thune", "SD", "R", true),
    new app.Senator("Thomas Tillis", "NC", "R", true),
    new app.Senator("Pat Toomey", "PA", "R", true),
    new app.Senator("Tom Udall", "NM", "D", false),
    new app.Senator("David Vitter", "LA", "R", true),
    new app.Senator("Mark Warner", "VA", "D", false),
    new app.Senator("Elizabeth Warren", "MA", "D", false),
    new app.Senator("Sheldon Whitehouse", "RI", "D", false),
    new app.Senator("Roger Wicker", "MS", "R", true),
    new app.Senator("Ron Wyden", "OR", "D", false)
  ];

  app.RollCallDetail = ng.core.Component({
    selector: 'rollcall-detail',
    inputs: ['sortMethod'],
    template: `
      <div>Sorted by: {{sortMethod}}</div>
      <ul class="senators">
        <li *ngFor="let senator of viewList">
          {{senator.name}} ({{senator.state}} - {{senator.party}})
        </li>
      </ul>
    `
  })
  .Class({
    constructor: function() {
      this.voterList = new app.VoterList("Test Bill");
      for (var i = 0; i < app.Senators.length; i++) {
        this.voterList.addSenatorVote(app.Senators[i], true); 
      }
      this.viewList = this.voterList.getListOrderedByState();
    },

    ngOnChanges: function(changes) {
      if (!changes || !changes.sortMethod) {
        return;
      }

      switch(changes.sortMethod.currentValue) {
        case 'state':
          this.viewList = this.voterList.getListOrderedByState();
          break;
        case 'name':
          this.viewList = [app.Senators[0]];
          break;
        case 'vote':
          this.viewList = [app.Senators[1]];
          break;

      }
    }
  });
})(window.app || (window.app = {}));
