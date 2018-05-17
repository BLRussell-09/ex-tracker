const ajax = require('./ajax');
const domBuilder = require('./domBuilder');
// const events = require('./events');
// const getSet = require('./getSet');

const reLoad = () =>
{
  const loadPage = ajax.exesJson().then((result) =>
  {
    $('#exHolder').html(domBuilder.exBuilder(result));
    ajax.locationJSON().then((location) =>
    {
      $('#locationHolder').html(domBuilder.domBuilder(location, result));
    });
  });
  return loadPage;
};

const init = () =>
{
  reLoad();
};

module.exports = init;
