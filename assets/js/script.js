(function() {

  function renderData() {
    var attrs = [
      {org: 'facebook', repo: 'react', element: '.react'},
      {org: 'angular', repo: 'angular.js', element: '.angular'},
      {org: 'emberjs', repo: 'ember.js', element: '.ember'},
      {org: 'vuejs', repo: 'vue', element: '.vue'}
    ]

    attrs.forEach(function(attr) {
      var activityModel = new ActivityModel(attr);
      var issuesModel = new IssuesModel(attr);
      var pullsModel = new PullsModel(attr);

      var view = new MetricsView({
        el: document.querySelector(attr.element),
        activityModel: activityModel,
        issuesModel: issuesModel,
        pullsModel: pullsModel
      });

// Put these into a queue and then re-render when all of the data comes back.  Doing this should stop the undefined notice from showing up.
      activityModel.fetch();
      issuesModel.fetch();
      pullsModel.fetch();
    })
  }

  renderData();
  setInterval(renderData, 60000);
})();