# why the periodic updates from the UI does not happen, as desired?

> this is because of the event loop and event queue. The worker thread also has its own event queue and event loop. The setInterval on the worker thread, do get fire regularly but they are not processed as the woker's main thread is busy computing the value of the pi. once it has completed the caluclation of the pi, it dispatches all the pending event to the main thread
