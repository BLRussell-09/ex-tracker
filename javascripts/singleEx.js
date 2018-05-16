const ajax = require('./ajax');

const singleEx = () =>
{
  console.log('oh muy');
  let ex = {};
  return ajax.exesJson().then((exes) =>
  {
    ex = exes[0];
    ex.places = [];
    return ajax.locationJSON().then((locations) =>
    {
      const allLocations = locations;
      const matches = allLocations.filter((location) =>
      {
        ex.locations.forEach(element =>
        {
          if (element === location.locationId)
          {
            ex.places.push(location);
          };
        });
        return false;
      });
      console.log(matches);
      return Promise.resolve(ex);
    });
  });
};

const singleEx2 = () =>
{
  console.log('oh muy');
  let ex = {};
  return ajax.exesJson().then((exes) =>
  {
    ex = exes[1];
    ex.places = [];
    return ajax.locationJSON().then((locations) =>
    {
      const allLocations = locations;
      const matches = allLocations.filter((location) =>
      {
        ex.locations.forEach(element =>
        {
          if (element === location.locationId)
          {
            ex.places.push(location);
          };
        });
        return false;
      });
      console.log(matches);
      return Promise.resolve(ex);
    });
  });
};

const singleEx3 = () =>
{
  console.log('oh muy');
  let ex = {};
  return ajax.exesJson().then((exes) =>
  {
    ex = exes[2];
    ex.places = [];
    return ajax.locationJSON().then((locations) =>
    {
      const allLocations = locations;
      const matches = allLocations.filter((location) =>
      {
        ex.locations.forEach(element =>
        {
          if (element === location.locationId)
          {
            ex.places.push(location);
          };
        });
        return false;
      });
      console.log(matches);
      return Promise.resolve(ex);
    });
  });
};

module.exports = {
  singleEx,
  singleEx2,
  singleEx3,
};
