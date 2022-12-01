import { ItemTreated } from "../components/Homebody";

type ItemPayload = {
  id: string;
  name: string;
  expiration: Date;
  created_at: Date;
  timeUntilExpire?: string;
};

interface ItemInputPayload extends Array<ItemPayload> {}

/**
 * This function treats the API payload data to be rendered at Table.
 * @param  {[Array<ItemPayload>]} itemInputPayload
 * @param {[Date]} todayDate uses today date as default
 * @return {[Array<ItemTreated>]} same object, but with a new property called "timeUntilExpire" and the properties using Date type are now formatted to strings
 */
export const itemsInputPayloadTreatment = (
  itemInputPayload: ItemInputPayload,
  todayDate = new Date()
) => {
  return itemInputPayload.map((element) => {
    if (typeof element.expiration === "string") {
      element.expiration = new Date(element.expiration);
    }
    if (typeof element.created_at === "string") {
      element.created_at = new Date(element.created_at);
    }

    const temp1 = timeUntilExpireCalculator(element, todayDate);
    return convertObjectsDatesPropertiesToStrings(temp1);
  });
};

interface convertObjectsDatesPropertiesToStringsProps extends ItemPayload {}

/**
 * This function iterates over the object and turn every Date property into a string using DD-MM-YY format.
 * @param  {[ItemPayload]} element
 * @return {[ItemTreated]} returns a new object without date properties.
 */
export const convertObjectsDatesPropertiesToStrings = (
  element: convertObjectsDatesPropertiesToStringsProps
) => {
  const obj = {} as ItemTreated;

  for (let [key, value] of Object.entries(element)) {
    //validator if property is inherited
    if (!element.hasOwnProperty(key)) continue;
    typeof value == typeof new Date()
      ? //TODO: check this types below
        (obj[key] = value.toLocaleDateString("pt-BR"))
      : (obj[key] = value);
  }
  return obj;
};

interface timeUntilExpireCalculatorProps extends ItemPayload {
  expiration: Date;
}

/**
 * This function create | update a object with a property called "expiration".
 * @param  {[timeUntilExpireCalculatorProps]} object
 * @param {[Date]} todayDate uses today date as default
 * @return {[ItemPayload]} the object, but with "timeUntilExpire" property created/updated
 */
export const timeUntilExpireCalculator = (
  object: timeUntilExpireCalculatorProps,
  todayDate = new Date()
) => {
  const result = object;
  let expiration: string | Date;

  typeof object.expiration === "string"
    ? (expiration = new Date(object.expiration))
    : (expiration = object.expiration);

  const diffTime = Math.round(expiration.getTime() - todayDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  diffTime > 0
    ? (result["timeUntilExpire"] = `${diffDays} dias`)
    : (result["timeUntilExpire"] = "Vencido");

  return result;
};
