let video = document.getElementByTag('video')

let context = new AudioWebApi()
let analyser = context.createAnalyzer()

source = context.createMediaStreamSource()
source.connect(analyser)

analyser.fftsize = 2048
let bufferLength = analyzer.frequencyBinCount
let dataArray = new Uint8Array(bufferLength)

analyzer.getByTimeDomainData(dataArray)
