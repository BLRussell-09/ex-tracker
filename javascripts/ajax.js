// const loadLocations = (iLoad, iFail) =>
// {
//   $.get('./db/locations.json').done(iLoad).fail(iFail);
// };

const locationJSON = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/locations.json').done((data) =>
    {
      resolve(data.locations);
    }).fail((iFail) =>
    {
      reject('I failed', iFail);
    });
  });
};

const exesJson = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/ex.json').done((data) =>
    {
      resolve(data.exes);
    }).fail((iFail) =>
    {
      reject('I failed',iFail);
    });
  });
};

// const loadMyEx = (iLoad, iFail) =>
// {
//   $.get('./db/ex.json').done(iLoad).fail(iFail);
// };

module.exports =
{
  // loadLocations,
  // loadMyEx,
  locationJSON,
  exesJson,
};
