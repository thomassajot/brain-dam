# Main Commands

| Description               	| Command                             		|
|-----------------------------	|----------------------------------------	|
| Create env from a yml file  	| `conda env create -f environment.yml`  		|
| Create env from scratch     	| `conda create --name SAIL python=3.7`  		|
| Remove env                  	| `conda env remove --name SAIL`           		|
| Conda set number of threads 	| `conda config --set default_threads 6` 		|
| Conda update env from file    | `conda env update --file environment.yml --prune `|
| Conda export env without build specific info | `conda env export --no-builds` |


# Complex commands

#### Generate an environment file without all the packages, and without the pip section and the prefix section
```shell  
conda activate SAIL;conda env export --from-history > environments/tmp-words;
conda env export --no-builds | sed '/- pip:/,$d' > environments/tmp-generated-base;
echo "# GENERATED FILE, please see environments/README.md" > environments/generated-base.yml;
grep -Fw -f environments/tmp-words environments/tmp-generated-base >> environments/generated-base.yml;
rm environments/tmp-words environments/tmp-generated-base;
```