function filterByCity(targetCity, listingCityArray) {
  let matches = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      matches.push(i);
    }
  }
  return matches;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let matches = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      matches.push(i);
    }
  }
  return matches;
}

function filterByTypes(targetTypes, listingTypeArray) {
  let matches = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    for (let j = 0; j < targetTypes.length; j++) {
      if (listingTypeArray[i] === targetTypes[j]) {
        matches.push(i);
        break;
      }
    }
  }
  return matches;
}
