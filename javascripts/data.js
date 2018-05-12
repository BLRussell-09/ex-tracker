const ajax = require('./ajax');
const domBuilder = require('./domBuilder');
const events = require('./events');
const getSet = require('./getSet');

const iLoad = (data) =>
{
  $('#locationHolder').append(domBuilder.domBuilder(data.locations));
  events();
  getSet.setLocations(data);
};

const loadEx = (data) =>
{
  $('#exHolder').append(domBuilder.exBuilder(data));
};

const iFail = () =>
{
  console.log('i Failed');
};

const init = () =>
{
  ajax.loadMyEx(loadEx, iFail);
  ajax.loadLocations(iLoad, iFail);
};

module.exports = init;
