from PIL import Image
import os
from os import listdir
from os.path import splitext

target_directory = '.'
target = '.png'
data = {}

names = []

for file in listdir(target_directory):
    filename, extension = splitext(file)

    try:
        if extension not in ['.py', target, '.html', '.json']:
            im = Image.open(filename + extension)
            im.save(filename + target)
            os.remove(filename + extension)
    except OSError:
        print('Cannot convert %s' % file)

for file in listdir(target_directory):
    filename, extension = splitext(file)
    if extension == '.png':
        names.append(filename)


import json


duppednames = []

for name in names:
    duppednames.append(name.split('-')[0])

for name in set(duppednames):
    data[name] = []

for name in names:
    data[name.split('-')[0]].append(name)

with open('textureimages.json', 'w') as jfile:
    json.dump(data, jfile, sort_keys=True, indent=4)
