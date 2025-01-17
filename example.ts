import { CustomError, catchError } from "./index"
const customError = new CustomError()
function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
async function getUser(id: number) {
  await wait(100)
  if (id === 2) {
    throw new CustomError("404-User not found, Try other id")
  }
  return { id, name: "Bruno" }
}
const [error, user] = await catchError(getUser(1), [CustomError])
if (error) {
  console.log(error.message)
} else {
  console.log(user)
}

const [error2, user2] = await catchError(getUser(2), [CustomError])
if (error2) {
  console.log(error2.message)
  console.log(error2.extraProp)
} else {
  console.log(user2)
}

customError.name = "Error on fetching user"
customError.type = 404
customError.message = `There was an error on ${getUser.name}`
console.log(customError.name)
console.log(customError.type)
console.log(customError.message)
