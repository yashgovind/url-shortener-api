async function generateId() {
    const { nanoid } = await import('nanoid');
    console.log(nanoid());
  }

generateId();


module.exports = { generateId };
