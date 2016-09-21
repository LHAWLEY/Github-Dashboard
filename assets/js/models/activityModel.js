class ActivityModel extends BaseModel {
  constructor(attrs) {
    super(attrs);
    this.url = `https://api.github.com/repos/${this.org}/${this.repo}/stats/commit_activity`;
  }

  fetch() {
    $.get(this.url, function(yearsActivity){
      this.days = yearsActivity[0].days;
      this.weeksTotal = yearsActivity[0].total;
      this.trigger('change');
    }.bind(this))
  }
}
