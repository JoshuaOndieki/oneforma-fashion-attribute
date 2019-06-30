import json


def restructure_category_data():
    with open('categoryimages.json', 'r') as jfile:
        new_data = json.load(jfile)

    with open('category.json') as jfile:
        data = json.load(jfile)

    with open('category.json', 'w') as jfile:
        for item in data:
            item['IMAGES'] = new_data[item['NAME']]
        json.dump(data, jfile, sort_keys=True, indent=4)


def restructure_part_data():
    with open('partimages.json', 'r') as jfile:
        new_data = json.load(jfile)

    with open('part.json') as jfile:
        data = json.load(jfile)

    with open('part.json', 'w') as jfile:
        for item in data:
            item['IMAGES'] = new_data[item['PART']]
        json.dump(data, jfile, sort_keys=True, indent=4)


def restructure_texture_data():
    with open('textureimages.json', 'r') as jfile:
        new_data = json.load(jfile)

    with open('texture.json') as jfile:
        data = json.load(jfile)

    with open('texture.json', 'w') as jfile:
        for item in data:
            item['IMAGES'] = new_data[item['TEXTURE']]
        json.dump(data, jfile, sort_keys=True, indent=4)


restructure_category_data()
restructure_part_data()
restructure_texture_data()
