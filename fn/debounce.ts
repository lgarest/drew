const handleInput = (e:string) => {
  console.log(e)
}

const DEBOUNCE_MS = 2000
type Fn = (...args: any[]) => any
function myDebounce<T extends Fn>(fn: T, delay: number, immediate: boolean = false) {
  let timeoutId: number | null = null
  return function () {
    const [context, args] = [this, arguments]
    timeoutId && clearTimeout(timeoutId)
    immediate && fn.apply(context, args)
    timeoutId = setTimeout(() => {
      // timeout = null // needed?
      !immediate && fn.apply(context, args)
    }, delay)
  }
}


function debounce(func, wait, immediate) {
  var timeout;
  return function() {
  	var context = this, args = arguments;
  	clearTimeout(timeout);
  	if (immediate && !timeout) func.apply(context, args);
  	timeout = setTimeout(function() {
  		timeout = null;
  		if (!immediate) func.apply(context, args);
  	}, wait);
  };
}


debounce(handleInput, DEBOUNCE_MS, false)
handleInput('iepa')
handleInput('iepa')
handleInput('iepa')
handleInput('iepa')
handleInput('iepa')
handleInput('iepa')
handleInput('iepa')
handleInput('iepa')
