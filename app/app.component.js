(function(app) {

  app.TopView = ng.core.Component({
    selector: 'top-view',
    directives: [app.RollCallDetail],
    template: `
      <h1>{{title}}</h1>
      <h2>{{subtitle}}</h2>
      <div><p>Searching For: {{searchQuery}}</p></div>
      <div>
        <label>Filter: </label>
        <input [(ngModel)]="searchQuery" placeholder="enter keywords" />
      </div>
      <div>
        <div class="sort-button" (click)="resortList($event)" sort-method="state">Sort by State</div>
        <div class="sort-button" (click)="resortList($event)" sort-method="name">Sort by Senator Name</div>
        <div class="sort-button" (click)="resortList($event)" sort-method="vote">Sort by Vote</div>
      </div>
      <rollcall-detail [sortMethod]="currentSortMethod"></rollcall-detail>
    `
  })
  .Class({
    constructor: function() {
      this.title = 'H.R.2578 Senate Vote Results';
      this.subtitle = 'A bill making appropriations for the Departments of Commerce and Justice, Science, and Related Agencies for the fiscal year ending September 30, 2016, and for other purposes.';
      this.searchQuery = '';
      this.currentSortMethod = 'state';
    },

    resortList: function(e) {
      if (!e || !e.target || !e.target.getAttribute) {
        console.warn('malformed event triggered');
        return;
      }

      var updatedSortMethod = e.target.getAttribute('sort-method');
      console.log(updatedSortMethod);

      switch(updatedSortMethod) {
        case 'state':
          this.currentSortMethod = 'state';
          break;
        case 'name':
          this.currentSortMethod = 'name';
          break;
        case 'vote':
          this.currentSortMethod = 'vote';
          break;
      }
    }
  });

})(window.app || (window.app = {}));
