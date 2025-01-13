import { CustomError, catchError } from "./index"

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
async function getUser(id: number) {
  await wait(1000)
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
