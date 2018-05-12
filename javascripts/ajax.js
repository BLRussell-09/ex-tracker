const loadLocations = (iLoad, iFail) =>
{
  $.get('./db/locations.json').done(iLoad).fail(iFail);
};

const loadMyEx = (iLoad, iFail) =>
{
  $.get('./db/ex.json').done(iLoad).fail(iFail);
};

module.exports =
{
  loadLocations,
  loadMyEx,
};
