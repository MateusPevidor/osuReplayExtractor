const lzma = require('lzma')
const fs = require('fs');
const StreamBuffer = require('streambuf');

let filename = 'replay.osr'
if (process.argv[2] != null)
  filename = process.argv[2]
let output = "output.txt"
if (process.argv[3] != null)
  output = process.argv[3]
 
let buffer = StreamBuffer(fs.readFileSync(filename));

let gamemode = buffer.readByte()
let gameVersion = buffer.readInt32LE()
let indicator = buffer.readByte()
let stringSize = buffer.readInt8()
let beatmapHash = buffer.readString(stringSize)
indicator = buffer.readByte()
stringSize = buffer.readInt8()
let playerName = buffer.readString(stringSize)
indicator = buffer.readByte()
stringSize = buffer.readInt8()
let replayHash = buffer.readString(stringSize)
let count300 = buffer.readInt16LE()
let count100 = buffer.readInt16LE()
let count50 = buffer.readInt16LE()
let countGeki = buffer.readInt16LE()
let countKatu = buffer.readInt16LE()
let countMiss = buffer.readInt16LE()
let score = buffer.readInt32LE()
let combo = buffer.readInt16LE()
let isPerfect = buffer.readByte()
let mods = buffer.readInt32LE()
indicator = buffer.readByte()
stringSize = buffer.readInt8()
let lifebar = buffer.readString(stringSize)
let timeStamp = buffer.readInt32LE() // Can't read Long
timeStamp = buffer.readInt32LE()     //
let replayBufferSize = buffer.readInt32LE()
let replayBuffer = buffer.read(replayBufferSize)
let onlineScoreId = buffer.readInt32LE() // Can't read Long
onlineScoreId = buffer.readInt32LE()     //

let lzmaDecoded = lzma.decompress(replayBuffer.buffer)
fs.writeFile(output, lzmaDecoded, () => {})