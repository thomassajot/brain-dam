> [!tldr] Global Interpreter Lock
> The GIL is a mutex (or a lock) that allows only one thread to hold the control of the Python interpreter.

The root of the cause: to solve memory management automatically, Python uses a **Garbage Collector** based on reference counting. The   



# References
https://realpython.com/python-gil/
https://www.youtube.com/watch?v=Obt-vMVdM8s