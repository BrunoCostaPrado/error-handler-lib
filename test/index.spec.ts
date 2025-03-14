import { expect, test } from "vitest"
import { CustomError, catchError } from "../src/index"

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

async function getUser(id: number) {
  // await wait(100)
  if (id === 2) {
    throw new CustomError("404-User not found, Try other id")
  }
  return { id, name: "Bruno" }
}

test("getUser returns user data when id is valid", async () => {
  const id: number = 1
  const [, user] = await catchError(getUser(id), [CustomError])
  expect(user).toEqual({ id, name: "Bruno" })
})

test("getUser throws CustomError when id is invalid", async () => {
  const id: number = 2
  await expect(getUser(id)).rejects.toThrowError(CustomError)
})

test("getUser throws a CustomError when id is invalid", async () => {
  const id: number = 2
  const [error] = await catchError(getUser(id), [CustomError])

  expect(error).toBeInstanceOf(CustomError)
  await expect(error?.message).toEqual("404-User not found, Try other id")
})
