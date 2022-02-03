See Blob post about CPython implementation of Dict: https://www.laurentluce.com/posts/python-dictionary-implementation/  
And original docstring comment in CPython code: https://github.com/python/cpython/blob/main/Objects/dictobject.c

```python
class Dict:

	def __init__(self, size=100):
		self.storage = [list() for _ in range(size)]
		self.size = size
		self.length = 0
	
	def __setitem__(self, key, value):
		key_pos = self._get_pos(key)
		for pairs in self.storage[key_pos]:
			if key == pairs[0]:
				# update existing key with new value
				pairs[1] = value
				break
		else:
			self.storage[key_pos].append([key, value])
			self.length += 1

	def __getitem__(self, key):
		key_pos = self._get_pos(key)
			for pairs in self.storage[key_pos]:
				if key == pairs[0]:
					return pairs[1]
		raise KeyError(f'Key {key} does not exists.')
	
	  
	
	def __delitem__(self, key):
		key_pos = self._get_pos(key)
		idx_to_remove = None
		for idx, pairs in enumerate(self.storage[key_pos]):
			if key == pairs[0]:
				idx_to_remove = idx
				break
		else:
			raise KeyError()

		del self.storage[key_pos][idx_to_remove]		
		self.length -=1
	
	  
	
	def __len__(self):
		return self.length
	
	def __contains__(self, key):
		key_pos = self._get_pos(key)
		for pairs in self.storage[key_pos]:
			if key == pairs:
				return True
		return False
		
	def __iter__(self):
		for k, v in self.items():
			yield k
	
	def keys(self):
		return self.__iter__()
	
	def values(self):
		for k, v in self.items():
			yield v
	
	def items(self):
		for pairs in self.storage:
			for pair in pairs:
				yield pair

	def get(self, key, default=None):
		try:
			return self[key]
		except KeyError:
			return default
	
	def _get_pos(self, key):
		return hash(key) % self.size
```