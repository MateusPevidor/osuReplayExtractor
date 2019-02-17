# osu!ReplayExtractor

osu!ReplayExtractor is a node script that allows you to get info about cursor movement and key clicking from osu!Replays.
You are able to extract replays data directly from the [osu!api] or .osr replay files.

## Installation

1- Clone this git repository. <br />
2- Run the following command inside the repository to install the dependencies:
```
npm i
```

## Usage
Inside the src/ directory run:
1- To retrieve replay info using the osu!api:
```
node request.js [param1] [param2] [param3] [param4]
```
Params:
1. Your osu!apiKey (required)
2. Player's username (required)
3. Beatmap ID (required)
4. Output filename (optional) (default: output.txt)

Example:
```
node request.js 95a82421248lai0a948a72pq96571laoq92817pa92 Floaddy 1546425 replay1.txt
```
2- To retrieve replay info from .osr file:
```
node readOsrFile.js [param1] [param2]
```
Params:
1. .osr filename (optional) (default: replay.osr)
2.  Output filename (optional) (default: output.txt)

Example:
```
node readOsrFile.js "idke - DragonForce - Cry Thunder [Unholy Darkness] (2018-11-24) Osu" replay2.txt
```

## Development
The require.js script uses [RequireJS] to make GET requests to the osu!api. The base64 response is then decoded using the built-in Buffer class, becoming a lzma stream. Finally the lzma stream is decompressed using the [lzma] module, and then saved to a text file using the filesystem node module.

The readOsrFile.js script uses the [StreamBuffer] module to read BinaryArrays. The script reads all the data from the .osr following [.osr File Format wiki] until it reaches the lzma stream. Finally it decompresses the stream using the lzma module and saves it to a text file using the filesystem node module.

[RequireJS]: <https://requirejs.org/docs/node.html>
[lzma]: <https://www.npmjs.com/package/lzma>
[.osr File Format wiki]: <https://osu.ppy.sh/help/wiki/osu!_File_Formats/Osr_(file_format)/>
[osu!api]: <https://osu.ppy.sh/p/api>
