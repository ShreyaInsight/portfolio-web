// Reuse the existing whole-page browser checks for the replacement project.
const fs=require('fs'),vm=require('vm');
let script=fs.readFileSync('design-audit/verify-satellite.cjs','utf8')
 .replaceAll('satellite-crop-health-scanner','financialflow')
 .replaceAll("path.includes('satellite-crop')","path.includes('financialflow')")
 .replaceAll('Satellite Crop Health Scanner.png','Financial Flow.png')
 .replaceAll('Satellite Crop','FinancialFlow')
 .replaceAll('ATS Screener|ats-screener|enterprise ATS','Sunnify|Spotify|yt-dlp')
 .replaceAll('staleATS','staleSunnify')
 .replaceAll('projects/ats-screener/','projects/sunnify/')
 .replaceAll('design-audit/satellite-','design-audit/financialflow-');
vm.runInNewContext(script,{require,console,process,setTimeout,Buffer});
