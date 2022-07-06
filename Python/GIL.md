> 	[!tldr] Global Interpreter Lock
> The GIL is a mutex (or a lock) that allows only one thread to hold the control of the Python interpreter.
> 
> - Use multi-threading for I/O bound programs because the thread has to wait to get the data.
> - Do NOT use multi-threading for CPU bound operations. They will run more slowly than in a single thread. Consider *multi-processing* instead, which runs multiple python instances.  

From the [doc](https://docs.python.org/3/glossary.html#term-global-interpreter-lock)The mechanism used by the [CPython](https://docs.python.org/3/glossary.html#term-CPython) interpreter to assure that only one thread executes Python [bytecode](https://docs.python.org/3/glossary.html#term-bytecode) at a time. This simplifies the CPython implementation by making the object model (including critical built-in types such as [`dict`](https://docs.python.org/3/library/stdtypes.html#dict "dict")) implicitly safe against concurrent access. Locking the entire interpreter makes it easier for the interpreter to be multi-threaded, at the expense of much of the parallelism afforded by multi-processor machines.

The root of the cause: to solve memory management automatically, Python uses **reference counting** (which is different to Garbage Collection). 
The reference count needs to be protected against **race conditions**. The reference count variable is kept safe by adding **locks** to all data structures that are shared across threads so that they are not modified inconsistently.
The GIL is a single lock on the interpreter itself, which saves having many locks, but enforces python to be executed by one thread at a time.



# References
https://realpython.com/python-gil/
https://www.youtube.com/watch?v=Obt-vMVdM8s
https://docs.python.org/3/glossary.html#term-global-interpreter-lock