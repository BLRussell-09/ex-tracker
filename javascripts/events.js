const domBuilder = require('./domBuilder');
const getSet = require('./getSet');

const initButtons = () =>
{
  $(document).ready();
  $('button#morning').click(morning);
  $('button#afternoon').click(afternoon);
  $('button#evening').click(evening);
  $('button#afterdark').click(afterDark);
  $('#searchBar').keypress(search);
};

const morning = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderMorn(getSet.getLocations()));
};

const afternoon = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderAft(getSet.getLocations()));
};

const evening = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderEve(getSet.getLocations()));
};

const afterDark = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderDrk(getSet.getLocations()));
};

const search = (e) => {
  if (e.keyCode === 13) {
    console.log('hoi');
    const userInput = $(e.target).val();
    $(`#locationHolder .locationCard:not(:contains(${userInput}))`).hide();
    $(e.target).val('');
  };
};

module.exports = initButtons;
