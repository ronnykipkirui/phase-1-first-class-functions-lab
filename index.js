

// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (int) {
    return function (fare) {
      return fare * int;
    };
  };
  const fareMultiplier = createFareMultiplier();
  
  const fareDoubler = (fareMultiplier) => fareMultiplier * 2;
  
  const fareTripler = (fareMultiplier) => fareMultiplier * 3;
  
  const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
  };
  Footer
  