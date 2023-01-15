Half precision is converting a model weights from float32 to float16. Doing so has the obvious advantage of lowering the model size and the input size (which is also converted to float16). This reduction is useful when running on machines with less memory or allows to run inference on larger batch sizes. 

> [!QUOTE] As expressed by [NVIDIA](https://docs.nvidia.com/deeplearning/performance/mixed-precision-training/index.html#introduction)
> [...] *(float16)* First require less memory, enabling the training and deployment of larger neural networks. Second, they require less memory bandwidth which speeds up data transfer operations. Third, math operations run much faster in reduced precision, especially on GPUs with Tensor Core support for that precision.
