let locArr = [];

const getLocations = () =>
{
  return locArr.locations;
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
