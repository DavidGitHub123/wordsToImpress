import AsyncStorage from "@react-native-async-storage/async-storage";

const _NOTIF_NAMES = "NOTIFS";

const makeNotifsItemIfItDoesntExist = async () => {
  const keys = await AsyncStorage.getAllKeys();
  if (keys.includes(_NOTIF_NAMES)) {
    return;
  }
  await AsyncStorage.setItem(_NOTIF_NAMES, JSON.stringify([]));
};

const getNotifs = async () => {
  return JSON.parse(await AsyncStorage.getItem(_NOTIF_NAMES));
};

const doesNotifExist = async (notif) => {
  const notifs = await getNotifs();
  console.log(notifs);
  return notifs.includes(notif);
};

const addNotif = async (notif) => {
  const notifs = await getNotifs();
  console.log(notifs);
  notifs.push(notif);
  await AsyncStorage.setItem(_NOTIF_NAMES, JSON.stringify(notifs));
};

const removeNotif = async (notif) => {
  let notifs = await getNotifs();
  notifs = notifs.filter((el) => el !== notif);
  await AsyncStorage.setItem(_NOTIF_NAMES, JSON.stringify(notifs));
};

export {
  makeNotifsItemIfItDoesntExist,
  getNotifs,
  doesNotifExist,
  addNotif,
  removeNotif,
};
