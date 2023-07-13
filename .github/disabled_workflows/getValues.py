import os
import ruamel.yaml
from collections import OrderedDict
from io import StringIO

yaml = ruamel.yaml.YAML()
yaml.preserve_quotes = True
yaml.Representer.add_representer(OrderedDict, yaml.Representer.represent_dict)
file_path = os.environ['FILE_PATHS'].split(" ")
# file_path = ['.github/workflows/getValues.py', '.github/workflows/live.yml', '.github/workflows/transform.py', 'TFB-Creative/plugins/Plan/config.yml', 'TFB-Flamecord/config.yml']
print(file_path)

root_path = '/home/runner/work/TFB-Network/TFB-Network/'
# root_path = 'E:/The Flying Birds/TFB-Dev/TFB-Network/'

with open(root_path + '.github/workflows/scripts/live_values.yml', "r") as file:
    live_values = yaml.load(file)

# print("live values: ", live_values)
output = OrderedDict()
result = OrderedDict()
name = 'getvalues_result'

for file in file_path:
    print('FILE PATH: ' + file)
    if file in live_values:
        with open(root_path + file, 'r') as f:
            yamlFileFromLive = yaml.load(f)
        result[live_values[file]] = yamlFileFromLive[live_values[file]]
        output[file] = result
        result= {}

# Use the open() function to create a file object
with open(root_path + '.github/workflows/scripts/livevalues.yml', 'w') as outfile:
    # Use the ruamel.yaml.dump() function to generate a string representation of the object
    # and write it to the file
    yaml.dump(output, outfile)