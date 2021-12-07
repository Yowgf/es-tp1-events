"""class event"""

class event:
    def __init__(self, createdAt, title, category, description):
        self.title = title
        self.createdAt = createdAt
        self.category = category
        self.description = description

    def toJSON(self):
        return {
            "createdAt": self.createdAt,
            "title": self.title,
            "category": self.category,
            "description": self.description,
        }
