import AsyncStorage from "@react-native-async-storage/async-storage";

// used for getting all names of lists from storage
const _listArrayName = "allLists";
const defaultList = "My List";

const wordMasteryFactory = (word) => {
  return { word: word, mastery: 0 };
};

const makeNewList = async (name) => {
  try {
    // const isDuplicate = _checkForDuplicates(name);

    //if (isDuplicate) {
    // throw new Error("Name already exists");
    //}

    await AsyncStorage.setItem(name, JSON.stringify([]));

    // add new name to _listArrayName
    const listNames = await getNamesOfLists();
    listNames.push(name);
    await AsyncStorage.setItem(_listArrayName, JSON.stringify(listNames));
  } catch (e) {
    console.error(e);
  }
};

//const _checkForDuplicates = async (name) =>
// !(await getNamesOfLists()).includes((el) => el === name);

const removeList = async (name) => {
  try {
    await AsyncStorage.removeItem(name);

    // remove list from _listArrayName
    const listNames = await getNamesOfLists();
    if (listNames === null) {
      return;
    }
    const filteredNames = listNames.filter((el) => el !== name);
    await AsyncStorage.setItem(_listArrayName, JSON.stringify(filteredNames));
  } catch (e) {
    console.error(e);
  }
};

const updateList = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, data);
  } catch (e) {
    console.error(e);
  }
};

const getNamesOfLists = async () => {
  try {
    return await AsyncStorage.getItem(_listArrayName);
  } catch (e) {
    console.error(e);
  }
};

const getList = async (name) => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (e) {
    console.error(e);
  }
};

const addOneWordToList = async (name, word) => {
  try {
    const wordMasteryObject = wordMasteryFactory(word);
    const list = JSON.parse(await AsyncStorage.getItem(name));
    list.push(wordMasteryObject);
    await AsyncStorage.setItem(name, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
};

const incrementMastery = async (name, word) => {
  try {
    const list = JSON.parse(await AsyncStorage.getItem(name));
    const wordIndex = list.find((el) => el.word === word);
    list[wordIndex].mastery = list[wordIndex].mastery + 1;
    await AsyncStorage.setItem(name, JSON.stringify(list));
    console.log(list);
  } catch (e) {
    console.error(e);
  }
};

const _resetDefaultList = async () => {
  try {
    await AsyncStorage.removeItem(defaultList);

    await AsyncStorage.setItem(defaultList, JSON.stringify([]));
  } catch (e) {
    console.error(e);
  }
};
export {
  makeNewList,
  removeList,
  updateList,
  getNamesOfLists,
  getList,
  addOneWordToList,
  defaultList,
  incrementMastery,
  _resetDefaultList,
};
