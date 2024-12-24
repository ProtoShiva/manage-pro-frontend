<<<<<<< HEAD
import client from "./client"
=======
import axios from "axios"
import client from "./client"

>>>>>>> b3dfd09bdd2d5ae4fafaf56877a60b8cd00792a8
export const createUser = async (userInfo) => {
  try {
    const { data } = await client.post("user/register", userInfo)
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}
<<<<<<< HEAD
=======

>>>>>>> b3dfd09bdd2d5ae4fafaf56877a60b8cd00792a8
export const signInUser = async (userInfo) => {
  try {
    const { data } = await client.post("user/login", userInfo)
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}
