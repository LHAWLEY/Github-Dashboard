class PullsModel extends BaseModel {
  constructor(attrs) {
    super(attrs);
    this.url = `https://api.github.com/repos/${this.org}/${this.repo}/pulls`;
  }

  fetch() {
    this._fetch(function (pulls) {
      this.timeSince = moment(pulls[0].updated_at).fromNow(true);
      this.trigger('change');
    }.bind(this));
  }
}
