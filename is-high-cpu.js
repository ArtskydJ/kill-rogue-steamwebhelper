var COUNTS_AS_HIGH_CPU_IF_USAGE_AT_OR_ABOVE = 0.8 // number larger than 0, up to 1
// If you only want to count maxing out a core as being "high cpu usage", then set this to 1
// If you want half cpu usage to count as being "high cpu usage", then set this to 0.5

var KILL_IF_HIGH_CPU_COUNT = 0.4 // number larger than 0, up to 1
// typeperf grabs a few cpu samples
// If you want few "high cpu usage" samples to result in killing the process, then set to 0.01
// If you require every sample to be "high cpu usage" in order to kill the process, then set to 1
// If you set this to 0, then it will kill the process no matter what the CPU usage was

var processorResults = require('fs').readFileSync('./typeperf_run.txt', 'utf-8')
	.split(/\r?\n/)
	.reduce(function(memo, line){
		var matched = line.match(/"\d+\.\d+"/)
		if (matched) {
			memo.push(parseFloat(matched[0].slice(1, -1)))
		}
		return memo
	}, [])

if (!processorResults.length) {
	throw new Error('Expected to have some processor results, but none were found. (See typeperf_run.txt)')
}

var highCpuProcessorResults = processorResults
	.filter(function (n) {
		return n >= (COUNTS_AS_HIGH_CPU_IF_USAGE_AT_OR_ABOVE * 100)
	})

var ratioOfHighCpuSamples = highCpuProcessorResults.length / processorResults.length // this will be a number between 0 and 1

if (ratioOfHighCpuSamples >= KILL_IF_HIGH_CPU_COUNT) {
	console.log('KILL THE PROCESS')
	process.exit(0) // success: it is high cpu
} else {
	console.log('cpu was normal')
	process.exit(1) // do not continue: low cpu usage
}
