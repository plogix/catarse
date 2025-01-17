//= require mithril/mithril.js
//= require underscore
//= require mithril.postgrest
//= require moment
//= require replace-diacritics
//= require chartjs
//= require api/init
//= require catarse.js/dist/catarse.js
//= require_self

(function(m, c, Chart){
  //Chart.defaults.global.responsive = true;
  Chart.defaults.global.responsive = false;
  Chart.defaults.Line.pointHitDetectionRadius = 0;
  Chart.defaults.global.scaleFontFamily = "proxima-nova";

  var adminRoot = document.getElementById('new-admin'),
      teamRoot = document.getElementById('team-root'),
      projectIndexRoot = document.getElementById('project-index-root'),
      projectInsightsRoot = document.getElementById('project-insights-root'),
      projectShowRoot = document.getElementById('project-show-root');

  if(adminRoot){
    m.route.mode = 'hash';
    m.route(adminRoot, '/', {
      '/': m.component(c.admin.Contributions, {root: adminRoot}),
      '/users': m.component(c.admin.Users)
    });
  }

  if(teamRoot){
    m.mount(teamRoot, c.pages.Team);
  }

  if(projectIndexRoot){
    m.mount(projectIndexRoot, c.contribution.ProjectsHome);
  }

  if(projectShowRoot) {
    m.mount(projectShowRoot, m.component(c.project.Show, {
      project_id: projectShowRoot.getAttribute('data-id'),
      project_user_id: projectShowRoot.getAttribute('data-project-user-id')
    }));
  }

  if(projectInsightsRoot){
    m.mount(projectInsightsRoot, m.component(c.project.Insights, {root: projectInsightsRoot}));
  }
}(window.m, window.c, window.Chart));

window.toggleMenu = function(){
  var userMenu = document.getElementById("user-menu-dropdown");
  userMenu.classList.toggle('w--open');
};

