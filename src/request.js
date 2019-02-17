const request = require('request')
const fs = require('fs')
const lzma = require('lzma')

if (process.argv[4] != null) {
  let apiKey = process.argv[2]
  let username = process.argv[3]
  let beatmapId = process.argv[4]
  let output = "output.txt"
  if (process.argv[5] != null)
    output = process.argv[5]

  request(`https://osu.ppy.sh/api/get_replay?k=${apiKey}&u=${username}&b=${beatmapId}&m=0`, { json: true }, (err, res, body) => {
    if (err) { return console.log(err) }
    let decoded = Buffer.from(body.content, 'base64')
    let lzmaDecoded = lzma.decompress(decoded)
    fs.writeFile(output, lzmaDecoded, () => { console.log('Saved') })
  })

} else {
  console.log('Missing arguments.')
  console.log('[r] - Required // [o] - Optional')
  console.log('Expected: apiKey[r] username[r] beatmapId[r] outputFile[o]')
}