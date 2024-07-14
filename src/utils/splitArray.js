/**
 * @name splitArray
 * @param {*} array : The array to split
 * @param {*} groupSize : The length of each group
 * @returns groupedArray : The array broken into groups
 * @author DreyTheBadGuy
 */

export const splitArray = (array, groupSize, tranType) => {
  const filteredArray = tranType
    ? array.filter(item => item.tranType === tranType)
    : array;
  const groups = [];
  for (let i = 0; i < filteredArray.length; i += groupSize) {
    groups.push(filteredArray.slice(i, i + groupSize));
  }
  return groups;
};
