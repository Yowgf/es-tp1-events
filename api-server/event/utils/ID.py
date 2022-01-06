"""ID class"""

from uuid import uuid4

class ID:
    # Returns an unique identifier, that is not in given array
    def findNotIn(array):
        newId = uuid4().hex
        while newId in array:
            newId = uuid4().hex
        return newId
