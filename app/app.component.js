(function(app) {

  app.Senators = [
    { name: 'Alexander', state: 'TN', party: 'R' },
    { name: 'Ayotte', state: 'NH', party: 'R' },
    { name: 'Baldwin', state: 'WI', party: 'D' },
    { name: 'Barrasso', state: 'WY', party: 'R' },
    { name: 'Bennet', state: 'CO', party: 'D' },
  ];

  app.Senator = ng.core.Class({
    constructor: function(name, state, party) {
      this.state = state;
      this.name = name;
      this.party = party;
    }
  });

  app.TopView = ng.core.Component({
    selector: 'top-view',
    template: `
      <h1>{{title}}</h1>
      <h2>{{subtitle}}</h2>
      <div><p>Searching For: {{searchQuery}}</p></div>
      <div>
        <label>Filter: </label>
        <input [(ngModel)]="searchQuery" placeholder="enter keywords" />
      </div>
      <ul class="senators">
        <li *ngFor="let senator of senators">
          {{senator.name}} ({{senator.state}} - {{senator.party}})
        </li>
      </ul>
    `
  })
  .Class({
    constructor: function() {
      this.title = 'H.R.2578 Senate Vote Results';
      this.subtitle = 'A bill making appropriations for the Departments of Commerce and Justice, Science, and Related Agencies for the fiscal year ending September 30, 2016, and for other purposes.';
      this.searchQuery = '';
      this.senators = app.Senators;
    }
  });

})(window.app || (window.app = {}));
