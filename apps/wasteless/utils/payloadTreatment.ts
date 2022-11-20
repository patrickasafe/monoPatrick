type ProductPayload = {
  id: string;
  product: string;
  expiration: Date;
  addedDate: Date;
  timeUntilExpire?: string;
};

interface rawDataTreatmentProps extends Array<ProductPayload> { }

/**
 * This function treats the API payload data to be rendered at Table.
 * @param  {[Array<ProductPayload>]} rawDataMock
 * @param {[Date]} todayDate uses today date as default
 * @return {[Array<ProductPayload>]} same object, but with a new property called "timeUntilExpire" and the properties using Date type are now formatted to strings
 */
export const rawDataTreatment = (rawDataMock: rawDataTreatmentProps, todayDate = new Date()) => {
  return rawDataMock.map((element) => {
    const temp1 = timeUntilExpireCalculator(element, todayDate);
    return convertObjectsDatesPropertiesToStrings(temp1);
  });
};

interface convertObjectsDatesPropertiesToStringsProps extends ProductPayload { }

/**
 * This function iterates over the object and turn every Date property into a string using DD-MM-YY format.
 * @param  {[ProductPayload]} element
 * @return {[ProductPayload]} returns a new object without date properties.
 */
export const convertObjectsDatesPropertiesToStrings = (
  element: convertObjectsDatesPropertiesToStringsProps
) => {
  const obj = {};

  for (let [key, value] of Object.entries(element)) {

    //validator if property is inheirited 
    if (!element.hasOwnProperty(key)) continue;
    typeof value == typeof new Date()
      ? //TODO: check this types below
      (obj[key] = value.toLocaleDateString("pt-BR"))
      : (obj[key] = value);
  }
  return obj;
};

interface timeUntilExpireCalculatorProps extends ProductPayload {
  expiration: Date;
}

/**
 * This function create | update a object with a property called "expiration".
 * @param  {[timeUntilExpireCalculatorProps]} object
 * @param {[Date]} todayDate uses today date as default
 * @return {[ProductPayload]} the object, but with "timeUntilExpire" property created/updated
 */
export const timeUntilExpireCalculator = (object: timeUntilExpireCalculatorProps, todayDate = new Date()) => {
  const result = object
  const expiration = object.expiration;

  const diffTime = Math.round(expiration.getTime() - todayDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  diffTime > 0
    ? (result["timeUntilExpire"] = `${diffDays} dias`)
    : (result["timeUntilExpire"] = "Vencido");

  return result
};
