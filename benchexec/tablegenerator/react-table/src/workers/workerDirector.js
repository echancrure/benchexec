// Content of ./scripts/stats.worker.js transformed into a data url to
// deal with Chrome being unable to load WebWorkers when opened using
// the file:// protocol https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker
const statsWorkerDataUrl = `data:text/plain;base64,b25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsKICBjb25zdCB7IGRhdGEsIHRyYW5zYWN0aW9uIH0gPSBlLmRhdGE7CgogIGNvbnN0IGRlZmF1bHRPYmogPSB7CiAgICBzdW06IDAsCiAgICBzdGRldjogMCwKICAgIGF2ZzogMCwKICAgIG1heDogMCwKICAgIG1pbjogSW5maW5pdHksCiAgICBtZWRpYW46IDAsCiAgICB2YXJpYW5jZTogMCwKICAgIGl0ZW1zOiBbXSwKICB9OwoKICBjb25zdCBjb3B5ID0gWy4uLmRhdGFdOwogIGNvbnN0IGJ1Y2tldHMgPSB7fTsKICBjb3B5LnNvcnQoKGEsIGIpID0+IGEuY29sdW1uIC0gYi5jb2x1bW4pOwoKICBjb25zdCB0b3RhbCA9IHsgLi4uZGVmYXVsdE9iaiB9OwoKICB0b3RhbC5tYXggPSBjb3B5W2NvcHkubGVuZ3RoIC0gMV0uY29sdW1uOwogIHRvdGFsLm1pbiA9IGNvcHlbMF0uY29sdW1uOwoKICAvLyBjYWxjdWxhdGlvbgogIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5KSB7CiAgICBjb25zdCBrZXkgPSBgJHtpdGVtLmNhdGVnb3J5VHlwZX0tJHtpdGVtLnJlc3VsdFR5cGV9YDsKICAgIGNvbnN0IGJ1Y2tldCA9IGJ1Y2tldHNba2V5XSB8fCB7CiAgICAgIC4uLmRlZmF1bHRPYmosCiAgICB9OwogICAgYnVja2V0LnN1bSArPSBpdGVtLmNvbHVtbjsKICAgIGJ1Y2tldC5tYXggPSBNYXRoLm1heChidWNrZXQubWF4LCBpdGVtLmNvbHVtbik7CiAgICBidWNrZXQubWluID0gTWF0aC5taW4oYnVja2V0Lm1pbiwgaXRlbS5jb2x1bW4pOwogICAgYnVja2V0Lml0ZW1zLnB1c2goaXRlbSk7CiAgICB0b3RhbC5zdW0gKz0gaXRlbS5jb2x1bW47CiAgICBidWNrZXRzW2tleV0gPSBidWNrZXQ7CiAgfQogIGZvciAoY29uc3QgW2J1Y2tldCwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhidWNrZXRzKSkgewogICAgdmFsdWVzLmF2ZyA9IHZhbHVlcy5zdW0gLyB2YWx1ZXMuaXRlbXMubGVuZ3RoOwogICAgaWYgKHZhbHVlcy5pdGVtcy5sZW5ndGggJSAyID09PSAwKSB7CiAgICAgIGNvbnN0IGlkeCA9IHZhbHVlcy5pdGVtcy5sZW5ndGggLyAyOwogICAgICB2YWx1ZXMubWVkaWFuID0KICAgICAgICAodmFsdWVzLml0ZW1zW2lkeCAtIDFdLmNvbHVtbiArIHZhbHVlcy5pdGVtc1tpZHhdLmNvbHVtbikgLyAyLjA7CiAgICB9IGVsc2UgewogICAgICB2YWx1ZXMubWVkaWFuID0KICAgICAgICB2YWx1ZXMuaXRlbXNbTWF0aC5mbG9vcih2YWx1ZXMuaXRlbXMubGVuZ3RoIC8gMi4wKV0uY29sdW1uOwogICAgfQogICAgYnVja2V0c1tidWNrZXRdID0gdmFsdWVzOwogIH0KICB0b3RhbC5hdmcgPSB0b3RhbC5zdW0gLyBjb3B5Lmxlbmd0aDsKICBpZiAoY29weS5sZW5ndGggJSAyID09PSAwKSB7CiAgICAvLyBldmVuLCB3ZSBuZWVkIGFuIGV4dHJhIHN0ZXAgdG8gY2FsY3VsYXRlIHRoZSBtZWRpYW4KICAgIGNvbnN0IGlkeCA9IGNvcHkubGVuZ3RoIC8gMjsKICAgIHRvdGFsLm1lZGlhbiA9IChjb3B5W2lkeCAtIDFdLmNvbHVtbiArIGNvcHlbaWR4XS5jb2x1bW4pIC8gMi4wOwogIH0gZWxzZSB7CiAgICAvLyBlenB6CiAgICB0b3RhbC5tZWRpYW4gPSBjb3B5W01hdGguZmxvb3IoY29weS5sZW5ndGggLyAyLjApXS5jb2x1bW47CiAgfQoKICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weSkgewogICAgY29uc3QgYnVja2V0ID0gYnVja2V0c1tgJHtpdGVtLmNhdGVnb3J5VHlwZX0tJHtpdGVtLnJlc3VsdFR5cGV9YF07CiAgICBjb25zdCBkaWZmQnVja2V0ID0gaXRlbS5jb2x1bW4gLSBidWNrZXQuYXZnOwogICAgY29uc3QgZGlmZlRvdGFsID0gaXRlbS5jb2x1bW4gLSB0b3RhbC5hdmc7CiAgICB0b3RhbC52YXJpYW5jZSArPSBNYXRoLnBvdyhkaWZmVG90YWwsIDIpOwogICAgYnVja2V0LnZhcmlhbmNlICs9IE1hdGgucG93KGRpZmZCdWNrZXQsIDIpOwogIH0KCiAgdG90YWwuc3RkZXYgPSBNYXRoLnNxcnQodG90YWwudmFyaWFuY2UgLyBjb3B5Lmxlbmd0aCk7CgogIGZvciAoY29uc3QgW2J1Y2tldCwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhidWNrZXRzKSkgewogICAgdmFsdWVzLnN0ZGV2ID0gTWF0aC5zcXJ0KHZhbHVlcy52YXJpYW5jZSAvIHZhbHVlcy5pdGVtcy5sZW5ndGgpOwogICAgLy8gY2xlYXJpbmcgbWVtb3J5CiAgICBkZWxldGUgdmFsdWVzLml0ZW1zOwogICAgZGVsZXRlIHZhbHVlcy52YXJpYW5jZTsKICAgIGJ1Y2tldHNbYnVja2V0XSA9IHZhbHVlczsKICB9CgogIGNvbnN0IHJlc3VsdCA9IHsgdG90YWwsIC4uLmJ1Y2tldHMgfTsKCiAgcG9zdE1lc3NhZ2UoeyByZXN1bHQsIHRyYW5zYWN0aW9uIH0pOwp9Owo=`;

const WORKER_POOLS = [
  {
    template: statsWorkerDataUrl,
    poolSize: 8,
    name: "stats",
  },
];

const queue = [];

const refTable = {};

let transaction = 1;

const handleWorkerMessage = ({ data: message }, worker) => {
  const { transaction, result } = message;
  const callback = refTable[transaction];
  worker.busy = false;
  callback(result);
  // clear entry
  delete refTable[transaction];
};

const workerPool = WORKER_POOLS.map(({ template, poolSize, name }) => {
  const pool = [];
  for (let i = 0; i < poolSize; i += 1) {
    const worker = new Worker(template);
    const workerObj = { worker, busy: false };
    worker.onmessage = (msg) => handleWorkerMessage(msg, workerObj);

    pool.push(workerObj);
  }
  return { name, pool };
}).reduce((acc, { name, pool }) => ({ ...acc, [name]: pool }), {});

const reserveWorker = (name) => {
  const worker = workerPool[name].filter((w) => !w.busy)[0];
  if (worker) {
    if (worker.busy) {
      return null;
    }
    worker.busy = true;
    return worker;
  }
  return null;
};

const processQueue = () => {
  const item = queue.shift();
  if (item) {
    const reservedWorker = reserveWorker(item.name);
    if (!reservedWorker) {
      queue.unshift(item);
      setImmediate(processQueue);
      return;
    }
    const ourTransaction = transaction;
    transaction += 1;
    const meta = {
      data: item.data,
      transaction: ourTransaction,
    };
    refTable[ourTransaction] = item.callback;
    reservedWorker.worker.postMessage(meta);
    setImmediate(processQueue);
  }
};

const enqueue = async ({ name, data }) =>
  new Promise((resolve) => {
    queue.push({ name, data, callback: resolve });
    setImmediate(processQueue);
  });

export { enqueue };
