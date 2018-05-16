const domBuilder = require('./domBuilder');
const getSet = require('./getSet');
const singleEx = require('./singleEx');
const myData = require('./data');

const initShowAll = () =>
{
  $('.exbutton').click(myData.exPromise);
};

const initButtons = () =>
{
  $(document).ready();
  $('button#morning').click(morning);
  $('button#afternoon').click(afternoon);
  $('button#evening').click(evening);
  $('button#afterdark').click(afterDark);
  $('#searchBar').keypress(search);
  $('#button25').click((e) =>
  {
    const myResults = [];
    singleEx.singleEx().then((results) =>
    {
      myResults.push(results);
      console.log(myResults);
      $('#exHolder').html(domBuilder.exBuilder2(myResults));
      initShowAll();
    });
  });
  $('#button22').click((e) =>
  {
    const myResults = [];
    singleEx.singleEx2().then((results) =>
    {
      myResults.push(results);
      console.log(myResults);
      $('#exHolder').html(domBuilder.exBuilder2(myResults));
      initShowAll();
    });
  });
  $('#button27').click((e) =>
  {
    const myResults = [];
    singleEx.singleEx3().then((results) =>
    {
      myResults.push(results);
      console.log(myResults);
      $('#exHolder').html(domBuilder.exBuilder2(myResults));
      initShowAll();
    });
  });
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
  if (e.keyCode === 13)
  {
    const userInput = $(e.target).val();
    $(`#locationHolder .locationCard:not(:contains(${userInput}))`).hide();
    $(e.target).val('');
  };
};

module.exports = initButtons;
