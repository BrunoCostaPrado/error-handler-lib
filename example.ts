import { CustomError, type CustomErrorType, catchError } from "./index"

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
} else {
  console.log(user2)
}

const [error3, user3] = await catchError(getUser(2))
if (error3) {
  console.log(error3.message)
} else {
  console.log(user3)
}

const customError = new CustomError()
customError.name = "This is a Custom Error"
console.log(customError.name)

const err: CustomErrorType = {
  name: "CustomError",
  extraProp: "Error: Test",
  message: "There is an error",
}
console.log(err.message)
