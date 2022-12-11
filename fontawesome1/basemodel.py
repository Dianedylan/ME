#!/usr/bin/python 3
import uuid
from datetime import datetime
import file_storage

class BaseModel:
    frmt = "%Y-%m-%dT%H:%M:%S.%f"
    
    def __init__(self, *args, **kwargs):
        if kwargs:
            for k,v in kwargs.items():
                if k == "created_at" or k == "updated_at":
                    v = datetime.strptime(v, frmt)
                """ if k != "__class__": 
                    setattr(self, k, v)
                """
        else:
            self.id = str(uuid.uuid4())
            self.created_at =self.updated_at = datetime.now()                    
                    

    def __str__(self):
         return "[{}] ({}) {}".format(type(self).__name__, self.id, self.__dict__)
        
    def save(self):
        self.updated_at = datetime.now()
        storage.save()
    def to_dict(self):
       my_dict = dict(self.__dict__)
       my_dict["__class__"] = str(type(self).__name__)
       my_dict["created_at"] =self.created_at.isoformat() 
       my_dict["updated_at"] =self.updated_at.isoformat() 
       return my_dict
   

    