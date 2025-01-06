function catchErrorTyped<T, E extends new (message?: string) => Error>(
  promise: Promise<T>,
  errorsToCatch?: E[]
): Promise<[undefined, T] | [InstanceType<E>]> {
  return promise
    .then(data => {
      return [undefined, data] as [undefined, T]
    })
    .catch(error => {
      if (errorsToCatch === undefined) {
        return [error]
      }

      if (errorsToCatch.some(e => error instanceof e)) {
        return [error]
      }

      throw error
    })
}

class CustomError extends Error {
  name = "CustomError"
  extraProp = "Error: Test"
}

export { catchErrorTyped, CustomError }

// function wait(duration: number) {
//   return new Promise(resolve => {
//     setTimeout(resolve, duration)
//   })
// }

// async function getUser(id: number) {
//   await wait(1000)
//   if (id === 2) {
//     throw new CustomError("404-User not found")
//   }
//   return { id, name: "Bruno" }
// }

// const [error, user] = await catchErrorTyped(getUser(2), [CustomError])
// if (error) {
//   console.log(error.message)
// } else {
//   console.log(user)
// }
