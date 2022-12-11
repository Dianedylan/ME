#!/usr/bin/python 3
import json
import os.path

class FileStorage:
    __file_path = "file.json"
    __objects = {}
    
    def all(self):
        return type(self).__objects
    
    def new(self, obj):
        """
        sets in __objects the obj with key <obj class name>.id
        """
        cls_name = type(obj).__name__
        idd = obj.id
        k = str(cls_name) + "." + str(idd)
        FileStorage.__objects[k] = obj.to_dict()

    def save(self):
        """
        Serializes __objects to the JSON file.
        """
        js_str = json.dumps(FileStorage.__objects)
        with open(FileStorage.__file_path, 'w', encoding="UTF-8") as fd:
            fd.write(js_str)
                    
    def reload(self):
        """
        desrializes the JSON file to __objects
        """
        if os.path.exists(FileStorage.__file_path):
            with open(FileStorage.__file_path, encoding="UTF-8") as fd:
                js_str = fd.readline()
            FileStorage.__objects = json.loads(js_str)   