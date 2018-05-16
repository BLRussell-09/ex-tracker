let locArr = [];

const getLocations = () =>
{
  return locArr;
};

const setLocations = (locations) =>
{
  locArr = locations;
  return locArr;
};

module.exports = {
  setLocations,
  getLocations,
};
