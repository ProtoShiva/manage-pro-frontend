import client from "./client"
export const createUser = async (userInfo) => {
  try {
    const { data } = await client.post("user/register", userInfo)
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}
export const signInUser = async (userInfo) => {
  try {
    const { data } = await client.post("user/login", userInfo)
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}
