class MetricsView {
  constructor(attrs){
    this.el            = attrs.el;
    this.activityModel = attrs.activityModel;
    this.issuesModel   = attrs.issuesModel;
    this.pullsModel    = attrs.pullsModel;
    this.setListeners()
  }

  setListeners () {
    this.activityModel.on('change', this.render.bind(this))
    this.issuesModel.on('change', this.render.bind(this))
    this.pullsModel.on('change', this.render.bind(this))
  }

  template(){
    return `
      <h2 class='title'>${this.activityModel.repo}</h2>
      <div class='weekly-total metric'>
        <span class='total'>${this.activityModel.weeksTotal}</span>
        <div class='caption'>Commits for Week</div>
      </div>
      <div class='metric'>
        <div class='histogram'>
          <div class='bar' style='height: ${this.activityModel.days[0] * 10}px'></div>
          <div class='bar' style='height: ${this.activityModel.days[1] * 10}px'></div>
          <div class='bar' style='height: ${this.activityModel.days[2] * 10}px'></div>
          <div class='bar' style='height: ${this.activityModel.days[3] * 10}px'></div>
          <div class='bar' style='height: ${this.activityModel.days[4] * 10}px'></div>
          <div class='bar' style='height: ${this.activityModel.days[5] * 10}px'></div>
          <div class='bar' style='height: ${this.activityModel.days[6] * 10}px'></div>
        </div>
        <div class='caption'>Commit Histogram for Week</div>
      </div>
      <div class='last-issue metric'>
        <span class='time'>${this.issuesModel.timeSince}</span>
        <div class='caption'>Since Last Issue Reported</div>
      </div>
      <div class='last-pull metric'>
        <span class='time'>${this.pullsModel.timeSince}</span>
        <div class='caption'>Since Last Pull Request Updated</div>
      </div>
    `
  }

  render() {
    this.el.innerHTML = this.template();
  }
}