let nanoid
module.exports.createID = async () => {
  if (!nanoid) ({ nanoid } = await import('nanoid'))
  return nanoid(10) // => "V1StGXR8_Z5jdHi6B-myT"
}