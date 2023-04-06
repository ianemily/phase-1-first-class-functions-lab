const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // returnFirstTwoDrivers and returnLastTwoDrivers functions omitted for brevity

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

module.exports = {
  selectingDrivers,
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers,
};
