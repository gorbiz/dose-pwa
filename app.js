// TODO make this a type='module'(?)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

// XXX Test do something ...dynamic
document.querySelector('#content').innerText = window.localStorage.getItem('somedata') || '[ empty ]'
