import { Account, Client, Databases, Query } from "react-native-appwrite";
import { ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.formless.kbm.ios",
  projectId: "66aa74f3000468bf2c90",
  databaseId: "66aa769800022004f39b",
  fireExtinguisherFormsCollectionId: "66aa76a80035844a9199",
  storageId: "66aa770f000b845b9005",
};

const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const databases = new Databases(client);

export const login = async (email, password) => {
  const session = await account.createEmailPasswordSession(email, password);
  return session;
};

export const createUser = async (email, password, name) => {
  try {
    const newUser = await account.create(ID.unique(), email, password, name);

    if (!newUser) await login(email, password);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createFireExtinguisherForm = async (form) => {
  try {
    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.fireExtinguisherFormsCollectionId,
      ID.unique(),
      {
        ...form,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFireExtinguisherForms = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.fireExtinguisherFormsCollectionId
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
