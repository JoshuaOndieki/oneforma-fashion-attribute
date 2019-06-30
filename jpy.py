import json


def restructure_data():
    """
        Convert comma separated category items to list
    """
    with open('category0.json', 'r') as jfile:
        data = json.load(jfile)

    with open('category.json', 'w') as jfile:
        for item in data:
            categories = item['CATEGORY'].split(',')
            item['CATEGORY'] = categories
        json.dump(data, jfile, sort_keys=True, indent=4)


def getpositions():
    positions = []
    with open('category.json') as jfile:
        data = json.load(jfile)
        for item in data:
            positions.append(item['POSITION'])

    return set(positions)


def getcategories():
    categories = []
    with open('category.json') as jfile:
        data = json.load(jfile)
        for item in data:
            for itm in item['CATEGORY']:
                categories.append(itm)

    return set(categories)


def getpartcategories():
    partcategories = []
    with open('part.json') as jfile:
        data = json.load(jfile)
        for item in data:
            partcategories.append(item['CATEGORY'])
    return set(partcategories)


def jpgtopng():
    from PIL import Image

    im = Image.open('ankle_socks.jpg')
    im.save('ankle_socks.png')

jpgtopng()
