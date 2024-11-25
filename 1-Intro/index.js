const getFullName = (fname, lname) => {
  return `${fname} ${lname}`
}

const actualName = getFullName('Bruce', 'Wayne')
const expectedFullName = 'BruceWayne'

if (actualName !== expectedFullName) {
  throw new Error(`${actualName} is not equal to ${expectedFullName}`)
}

// [LECTURE] ->  This is an example of using testing.