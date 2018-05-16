const ajax = require('./ajax');
const domBuilder = require('./domBuilder');
const events = require('./events');
const getSet = require('./getSet');

const exPromise = () =>
{
  const exData = ajax.exesJson().then((result) =>
  {
    $('#exHolder').append(domBuilder.exBuilder(result));
    ajax.locationJSON().then((locations) =>
    {
      $('#locationHolder').append(domBuilder.domBuilder(locations, result));
      events();
      getSet.setLocations(locations);
    });
  });
  return exData;
};

const init = () =>
{
  exPromise();
};

module.exports = init;
