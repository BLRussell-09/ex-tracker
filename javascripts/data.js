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

const allData = () =>
{
  // const locations = {};
  return Promise.all([ajax.exesJson(), ajax.locationJSON(),]).then((results) =>
  {
    console.log(results);
    const myData = [...results[0], ...results[1],];
    console.log(myData);
    return Promise.resolve(myData);
  }).catch((error) =>
  {
    console.error(error);
  });
};

const init = () =>
{
  exPromise();
  allData();
};

module.exports = init;
