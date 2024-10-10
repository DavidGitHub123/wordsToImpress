import AsyncStorage from "@react-native-async-storage/async-storage";
import data from "../data";

const defaultList = "My List";

const wordMasteryFactory = (word) => {
  return { word: word, mastery: 0 };
};

const makeNewList = async (name) => {
  try {
    if (await _checkForDuplicates(name)) {
      throw new Error("Name already exists");
    }

    await AsyncStorage.setItem(name, JSON.stringify([]));
  } catch (e) {
    console.error(e);
  }
};

const _checkForDuplicates = async (name) =>
  (await getNamesOfLists()).includes(name);

const removeList = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (e) {
    console.error(e);
  }
};

const updateList = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
};

const getNamesOfLists = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    console.error(e);
  }
};

const getList = async (name) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(name));
  } catch (e) {
    console.error(e);
  }
};

const addOneWordToList = async (name, word) => {
  try {
    if (!(await listContainsWord(name, word))) {
      return;
    }
    const wordMasteryObject = wordMasteryFactory(word);
    const list = await getList(name);
    list.push(wordMasteryObject);
    await AsyncStorage.setItem(name, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
};

const incrementMastery = async (name, word) => {
  try {
    const list = await getList(name);
    const wordIndex = list.findIndex((el) => el.word === word);
    list[wordIndex].mastery = list[wordIndex].mastery + 1;
    await AsyncStorage.setItem(name, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
};

const _resetDefaultList = async () => {
  try {
    await AsyncStorage.setItem(defaultList, JSON.stringify([]));
  } catch (e) {
    console.error(e);
  }
};

const getNLeastMastered = async (name, n) => {
  try {
    const list = await getList(name);
    const sortedList = list.sort((a, b) => a.mastery - b.mastery);
    return sortedList.slice(0, n);
  } catch (e) {
    console.error(e);
  }
};

const removeOneWordFromList = async (name, word) => {
  try {
    const list = await getList(name);
    const filteredList = list.filter((el) => el.word !== word);
    await updateList(name, filteredList);
  } catch (e) {
    console.error(e);
  }
};

const listContainsWord = async (name, word) => {
  try {
    const list = await getList(name);
    return (
      list.filter((el) => el.word === word).length === 0 || list.length === 0
    );
  } catch (e) {
    console.error(e);
  }
};

const initLists = async (isDev) => {
  const lists = await getNamesOfLists();
  if (!lists.includes(defaultList)) {
    await makeNewList(defaultList);
  }

  if (isDev) {
    await _resetDefaultList();

    for (const wordData of data.slice(0, 50)) {
      await addOneWordToList(defaultList, wordData.Word);
    }
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
  getNLeastMastered,
  removeOneWordFromList,
  initLists,
};
