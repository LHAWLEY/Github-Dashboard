class IssuesModel extends BaseModel {
  constructor(attrs) {
    super(attrs);
    this.url = `https://api.github.com/repos/${this.org}/${this.repo}/issues`;
  }

  fetch() {
    $.get(this.url, function(issues){
      this.timeSince = moment(issues[0].created_at).fromNow(true);
      this.trigger('change');
    }.bind(this))
  }
}
