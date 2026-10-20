const fs=require('fs'),zlib=require('zlib');
const dir='src/components/generated',dataFile=dir+'/profile-data.ts';
const encoded=JSON.parse(fs.readFileSync(dataFile,'utf8').match(/export const DATA = ("[\s\S]*");\s*$/)[1]);
const data=fs.existsSync('capture-data.json')?fs.readFileSync('capture-data.json'):zlib.gunzipSync(Buffer.from(encoded,'base64'));
JSON.parse(data);const b64=zlib.gzipSync(data,{level:9}).toString('base64'),runtime=fs.readFileSync('runtime.js','utf8');new Function(runtime);
fs.writeFileSync(dataFile,'export const DATA = '+JSON.stringify(b64)+';\n');fs.writeFileSync(dir+'/profile-runtime.ts','export const RUNTIME = '+JSON.stringify(Buffer.from(runtime).toString('base64'))+';\n');
const html=fs.readFileSync('offline.html','utf8'),start=html.indexOf('<script>'),end=html.lastIndexOf('</script>');if(start<0||end<start)throw new Error('Offline entry template is invalid');
const script=('window.TT_DATA='+JSON.stringify(b64)+';'+runtime).split('</script').join('<\\/script');fs.writeFileSync('offline.html',html.slice(0,start+8)+script+html.slice(end));console.log('Regenerated the MagicPath modules and offline entry. Run npm run build next.');
