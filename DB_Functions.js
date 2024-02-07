const { uuid } = require('uuidv4');

// Checks if user id is stored in local storage and creates
// new user if no user id is found.
export function doesUserExist() {
    const userID = localStorage.getItem('userID');
  
    return !userID;
  };
  

  // adds new user to SQL table and stores id in local storeage.
  async function createNewUser() {
    const userID = uuid();
    // const userID = "helloWorld";
  
    const client = new Client();
    await client.connect()
  
    try {
      const res = await client.query(`INSERT INTO lists id ${userID}`)
      localStorage.setItem('userID', userID)
    } catch (err) {
      console.error(err)
    } finally {
      await client.end()
    }
  
  
    // make new sql row with id = userID and default of [];
  
    // store user ID locally
  };

  export async function getList() {

  }

  export async function editList() {

  }