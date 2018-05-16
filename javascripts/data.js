const ajax = require('./ajax');
const domBuilder = require('./domBuilder');
const events = require('./events');
const getSet = require('./getSet');

// const locationPromise = () =>
// {
//   const locData = ajax.locationJSON().then((result) =>
//   {
//     console.log(result);
//     $('#locationHolder').append(domBuilder.domBuilder(result));
//     events();
//     getSet.setLocations(result);
//   });
//   return locData;
// };

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

module.exports = {
  init,
  exPromise,
};
