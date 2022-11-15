type ProductPayload = {
  id: string;
  product: string;
  expiration: Date | string;
  addedDate: Date | string;
  timeUntilExpire?: string;
};

interface Props extends Array<ProductPayload> {}

/**
 * This function treats the API payload data to be rendered at Table.
 * @param  {[ProductPayload]} rawDataMock
 * @return {[ProductPayload]} same object, but with a new property called "timeUntilExpire" and the properties using Date type are now formatted to strings
 */
export const rawDataTreatment = (rawDataMock: Props) => {
  return rawDataMock.map((element) => {
    const temp1 = timeUntilExpireCalculator(element);
    return ifDateToStringVal(temp1);
  });
};

const ifDateToStringVal = (element: ProductPayload) => {
  const obj = {};

  for (let [key, value] of Object.entries(element)) {
    if (!element.hasOwnProperty(key)) continue;
    if (typeof value == typeof new Date()) {
      obj[key] = value.toLocaleDateString("pt-BR");
    } else {
      obj[key] = value;
    }
  }
  return obj;
};

/**
 * This function create | update a object with a property called "expiration".
 * @param  {[ProductPayload]} object
 * @return {[ProductPayload]} the object, but with "timeUntilExpire" property created/updated
 */
const timeUntilExpireCalculator = (object: ProductPayload) => {
  const date1 = object.expiration;
  const date2 = new Date();

  const diffTime = Math.abs(date1.getTime() - date2.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  object["timeUntilExpire"] = `${diffDays} dias`;

  return object;
};
