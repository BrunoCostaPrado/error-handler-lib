import { expect, it, test } from "vitest"
import { CustomError, catchError } from "../index"

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

async function getUser(id: number) {
  await wait(500)
  if (id === 2) {
    throw new CustomError("404-User not found, Try other id")
  }
  return { id, name: "Bruno" }
}

test("getUser returns user data when id is valid", async () => {
  const id = 1
  const [, user] = await catchError(getUser(id), [CustomError])
  expect(user).toEqual({ id, name: "Bruno" })
  console.log(user)
})

test("getUser throws CustomError when id is invalid", async () => {
  const id = 2
  await expect(getUser(id)).rejects.toThrowError(CustomError)
  console.log(getUser(id))
})
