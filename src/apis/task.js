import client from "./client"

export const getAllUserTasks = async () => {
  try {
    const { data } = await client.get("task/allTasks")
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}

export const createTasks = async (taskInfo) => {
  try {
    const { data } = await client.post("task/taskList", taskInfo)
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}

export const updateStatus = async (id, updates) => {
  try {
    const { data } = await client.patch(`task/${id}`, {
      status: updates,
    })
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}

export const deleteCard = async (id) => {
  try {
    const { data } = await client.delete(`task/${id}`)
    return data
  } catch (error) {
    const { response } = error
    return response.data
  }
}
