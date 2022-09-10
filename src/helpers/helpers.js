export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type]);
  return [...new Set(unique)];
};

export const putCommasInPrice = price =>
  new Intl.NumberFormat("en-IN").format(price);

export const getFilteredProperties = (properties, state) => {
  let tempProperties = [...properties];

  if (state.searchQuery !== "") {
    tempProperties = tempProperties.filter(property =>
      property.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }
  if (state.location !== "All Location") {
    tempProperties = tempProperties.filter(property =>
      state.location.split(",").includes(property.city)
    );
  }
  if (state.checkInDate !== "") {
    tempProperties = tempProperties.filter(
      property => new Date(state.checkInDate) - new Date(property.checkOut) > 0
    );
  }

  if (state.priceRange === "$500-$2000") {
    tempProperties = tempProperties.filter(
      property => property.price >= 500 && property.price <= 2000
    );
  }

  if (state.priceRange === "$2000-$5000") {
    tempProperties = tempProperties.filter(
      property => property.price >= 2000 && property.price <= 5000
    );
  }

  if (state.priceRange === "$5000-$10000") {
    tempProperties = tempProperties.filter(
      property => property.price >= 5000 && property.price <= 10000
    );
  }

  if (state.propertyType !== "All Property") {
    tempProperties = tempProperties.filter(
      property => state.propertyType === property.propertyType
    );
  }

  return tempProperties;
};
