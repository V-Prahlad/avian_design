class LocalStorage {
  get = (key, parseJson) => {
    let data = localStorage.getItem(key) || null;
    if (data && parseJson) {
      data = JSON.parse(data);
    }
    return data;
  };
  save = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  deleteItem = (key) => {
    localStorage.removeItem(key);
  };
  deleteAll = () => {
    localStorage.clear();
  };
}

export function getHiredUserFromLocalStorage() {
  const user = new LocalStorage().get("user", true);
  return user != null ? user : [];
}

export function addHiredUserToLocalStorage(user) {
  let userList = getHiredUserFromLocalStorage();
  // console.log(userList);
  userList.push(user);
  new LocalStorage().save("user", userList);
}

export function deleteHiredUserFromLocalStorage(user) {
  let userList = getHiredUserFromLocalStorage();
  userList = userList.filter((item) => item.id !== user.id);
  new LocalStorage().save("user", userList);
}

export function getHiredUserFromLocalStorageFromId(id) {
  let userList = getHiredUserFromLocalStorage();
  return userList.filter((item) => item.id === id);
}
