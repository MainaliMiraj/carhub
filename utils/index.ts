export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePriceDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const milageRate = city_mpg * mileageFactor;
  const ageRate = new Date().getFullYear() - year;
  const rentalRatePerDay = basePriceDay + milageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
