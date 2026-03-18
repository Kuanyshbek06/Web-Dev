class Animal:
    def __init__(self,name,age,color):
        self.name=name
        self.age=age
        self.color=color
    def speak(self):
        return "animal makes sound"
    def __str__(self):
        return f"{self.name} is {self.age} years old and {self.color}"
    
class Dog(Animal):
    def __init__(self,name,age,color,breed):
        super().__init__(name,age,color)
        self.breed=breed
    
    def speak(self):
        return "Woof"
    def __str__(self):
        return super().__str__() + f", breed: {self.breed}"

class Cat(Animal):
    def __init__(self,name,age,color,lives):
        super().__init__(name,age,color)
        self.lives=lives
    
    def speak(self):
        return "Meow"
    def __str__(self):
        return super().__str__()+ f",  lives: {self.lives}"